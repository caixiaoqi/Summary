import {
  formatDate
} from '@/utils/tools'

/**
 * 解析es聚合的数据，并构造成echarts line格式
 * @param {Object} aggregations es聚合的数据
 * @param {String} index es index
 * @param {Number} timePeriod 时间间隔
 * @returns {Object} echarts line格式
 */
export function parseAggData (aggregations, indexName, timePeriod) {
  let timeBuckets = aggregations.times.buckets
  let timeZones = []
  let xAxis = []
  let levelNames = {}
  let mapData = {}
  for (let i = 0; i < timeBuckets.length; i++) {
    let timeBucket = timeBuckets[i]
    let time = timeBucket.key
    timeZones.push(time)
    xAxis.push(formatTimeByPeriod(time, timePeriod)) // TODO  aaa
    let logLevels = timeBucket.logLevels.buckets
    for (let k = 0; k < logLevels.length; k++) {
      let levelBucket = logLevels[k]
      let levelName = levelBucket.key
      levelNames[levelName] = true
      let levelDocCount = levelBucket.doc_count
      let mapKey = time + '' + levelName
      mapData[mapKey] = levelDocCount
    }
  }
  let levelNamesArray = Object.keys(levelNames)
  let series = []
  for (let j = 0; j < levelNamesArray.length; j++) {
    let levelName = levelNamesArray[j]
    let yAxis = []
    for (let k = 0; k < timeZones.length; k++) {
      let time = timeZones[k]
      let mapKey = time + '' + levelName
      let docCount = mapData[mapKey]
      if (!docCount) {
        docCount = 0
      }
      yAxis.push({
        value: docCount,
        time: time
      })
    }
    series.push({
      name: levelName,
      type: 'bar',
      data: yAxis
    })
  }
  return {
    timeZones: timeZones,
    xAxis: xAxis,
    series: series,
    indexName: indexName
  }
  // return buildAggEchartData(xAxis, echartDatas, indexName)
}

/**
 * 根据时间差，返回es的数据间隔时间
 * @param {Number} timeDiff 时间差
 * @returns {Number} timePeriod 时间间隔
 */
export function getTimePeriod (timeDiff) {
  let timePeriod = 1000
  let seconds = parseInt(timeDiff / 1000)
  if (seconds > 60) {
    let minutes = parseInt(seconds / 60)
    timePeriod = timePeriod * 60 // 1000 * 60
    if (minutes > 60) {
      let hours = parseInt(minutes / 60)
      timePeriod = timePeriod * 60 // 1000 * 60 * 60
      if (hours > 24) {
        let day = parseInt(hours / 24)
        timePeriod = timePeriod * 24 // 1000 * 60 * 60 *24
        if (day > 30) {
          let month = parseInt(day / 30)
          // timePeriod = timePeriod * 30 // 1000 * 60 * 60 *24 * 30
          timePeriod = 'month'
          if (month > 12) {
            // let year = parseInt(month / 12)
            // timePeriod = timePeriod * 12 // 1000 * 60 * 60 *24 * 30 * 12
            timePeriod = 'year'
            // if (year > 10) {
            //   // timePeriod = timePeriod * 10 // 1000 * 60 * 60 *24 * 30 * 12 * 10
            //   timePeriod = '10year'
            // }
          }
        }
      }
    }
  }
  return timePeriod
}

/**
 * 根据参数，返回es聚合语句
 * @param {Number} timePeriod 时间间隔
 * @param {Date} minTime 最小时间
 * @param {Date} maxTime 最大时间
 * @returns {Object} options es聚合语句
 */
export function getAggQueryParas (timePeriod, minTime, maxTime, queryKey) {
  let dateHistogram = {
    'field': '@timestamp',
    'interval': timePeriod,
    'min_doc_count': 0
  }
  let query = false
  let queryMust = []
  if (minTime || maxTime) {
    let extendedBounds = {}
    let timeRange = {}

    if (minTime) {
      let min = formatDate(minTime)
      extendedBounds['min'] = min
      timeRange['gte'] = minTime.getTime()
    }
    if (maxTime) {
      let max = formatDate(maxTime)
      extendedBounds['max'] = max
      timeRange['lte'] = maxTime.getTime()
    }
    dateHistogram['extended_bounds'] = extendedBounds
    query = true
    let rangeFilter = {
      'range': {
        '@timestamp': timeRange
      }
    }
    queryMust.push(rangeFilter)
  }
  if (queryKey) {
    query = true
    let msgFilter = {
      'term': { 'message': queryKey }
    }
    queryMust.push(msgFilter)
  }

  let options = {
    // 'size': 0,
    'aggs': {
      'times': {
        'date_histogram': dateHistogram,
        'aggs': {
          'logLevels': {
            'terms': {
              'field': 'logLevel'
            }
          }
        }
      }
    }
  }

  if (query) {
    query = {
      'constant_score': {
        'filter': {
          'bool': {
            'must': queryMust
          }
        }
      }
    }
    options['query'] = query
  }
  return options
}

/**
 * 构造echarts line格式数据
 * @param {Array} xAxis 横坐标
 * @param {Array<Object>} series 数据
 * @returns {Object} echarts line格式数据
 */
export function buildAggEchartData (xAxis, series, title, subTitle) {
  let options = {
    title: {
      text: title || 'index',
      subtext: subTitle || '应用日志聚合'
    },
    tooltip: {
      trigger: 'axis'
    },
    brush: {
      toolbox: ['lineX', 'clear'],
      throttleType: 'debounce', // 动作停顿一段时间后回调
      throttleDelay: 1000 // 停顿时间
    },
    legend: {
      bottom: '0'
    },
    toolbox: {
      show: true,
      feature: {
        saveAsImage: {
          show: true
        }
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: xAxis
    },
    yAxis: {
      type: 'value'
    },
    series: series
  }
  return options
}

/**
 * 根据时间间隔，格式化时间
 * @param {Number} time 时间
 * @param {Number | String} period 间隔
 * @returns {String} timeStr 格式化后的时间
 */
function formatTimeByPeriod (time, period) {
  let seconds = 1000
  let minutes = seconds * 60
  let hours = minutes * 60
  let day = hours * 24

  let timeStr = formatDate(new Date(time), 'mm分ss秒')
  switch (period) {
    case minutes :
      timeStr = formatDate(new Date(time), 'hh时mm分')
      break
    case hours :
      timeStr = formatDate(new Date(time), 'dd日 hh时')
      break
    case day :
      timeStr = formatDate(new Date(time), 'MM月dd日')
      break
    case 'month' :
      timeStr = formatDate(new Date(time), 'yyyy年MM月')
      break
    case 'year' :
      timeStr = formatDate(new Date(time), 'yyyy年')
      break
    // case '10year' :
    //   timeStr = formatDate(new Date(time), 'yyyy年')
    //   break
  }
  return timeStr
}

export function buildAggQueryOptions (from, to, timePeriod, queryKey) {
  timePeriod = timePeriod || getTimePeriod(to.getTime() - from.getTime())
  let options = getAggQueryParas(timePeriod, from, to, queryKey)
  return options
}

/**
 * 根据选择的区域，生成es查询语句
 * @param {Object} brushKey 处理后的echarts brush数据
 * @param {String} index es的index
 * @param {String | boolean} queryKey es的index
 * @returns {Object} options es post查询请求的body
 */
export function buildBrushQueryOptions (brushKey, index, queryKey) {
  let from = false
  let to = false
  let esShouldArray = []
  for (var key in brushKey) {
    let esShould = {
      'term': {
        'logLevel': key
      }
    }
    esShouldArray.push(esShould)
    let times = brushKey[key]
    let timeCount = times.length
    if (timeCount > 0) {
      if (!from) {
        from = times[0]
      } else if (from > times[0]) {
        from = times[0]
      }
      if (timeCount > 1) {
        if (!to) {
          to = times[1]
        } else if (to < times[1]) {
          to = times[1]
        }
      }
    }
  }
  let indexFilter = {
    'term': {'type': index}
  }
  let esMust = [indexFilter]
  if (from) {
    let timestamp = {
      'gte': from
    }
    if (to) {
      timestamp['lte'] = to
    }
    let timeFilter = {
      'range': {
        '@timestamp': timestamp
      }
    }
    esMust.push(timeFilter)
  }
  if (queryKey) {
    let msgFilter = {
      'term': { 'message': queryKey }
    }
    esMust.push(msgFilter)
  }
  let esBool = {
    'must': esMust,
    'should': esShouldArray
  }
  let options = {
    'query': {
      'constant_score': {
        'filter': {
          'bool': esBool
        }
      }
    },
    'from': 0,
    'size': 10
  }
  return options
}
