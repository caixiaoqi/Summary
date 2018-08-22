let fastPickerOptions = {
  shortcuts: [{
    text: '最近 15 分钟',
    onClick (picker) {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 1000 * 60 * 15)
      picker.$emit('pick', [start, end])
    }
  }, {
    text: '最近 30 分钟',
    onClick (picker) {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 1000 * 60 * 30)
      picker.$emit('pick', [start, end])
    }
  }, {
    text: '最近 1 小时',
    onClick (picker) {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 1000 * 60 * 60)
      picker.$emit('pick', [start, end])
    }
  }, {
    text: '最近 3 小时',
    onClick (picker) {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 1000 * 60 * 60 * 3)
      picker.$emit('pick', [start, end])
    }
  }, {
    text: '最近一天',
    onClick (picker) {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24)
      picker.$emit('pick', [start, end])
    }
  }, {
    text: '最近三天',
    onClick (picker) {
      const date = new Date()
      date.setTime(date.getTime() - 3600 * 1000 * 24 * 3)
      picker.$emit('pick', date)
    }
  }, {
    text: '最近一周',
    onClick (picker) {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
      picker.$emit('pick', [start, end])
    }
  }, {
    text: '最近一个月',
    onClick (picker) {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
      picker.$emit('pick', [start, end])
    }
  }, {
    text: '最近三个月',
    onClick (picker) {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
      picker.$emit('pick', [start, end])
    }
  }, {
    text: '最近一年',
    onClick (picker) {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 365)
      picker.$emit('pick', [start, end])
    }
  }]
}

export default fastPickerOptions
