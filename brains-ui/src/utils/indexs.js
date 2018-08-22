function columnsToObject (data) {
  let props = []
  let attributes = data.split(' ')
  for (let i = 0; i < attributes.length; i++) {
    let attribute = attributes[i]
    if (attribute) {
      props.push(attribute)
    }
  }
  return props
}

/**
 * 解析ES indexs
 */
export function parseIndexs (data) {
  let tables = data.split('\n')
  let tableHead = tables[0]
  tableHead = columnsToObject(tableHead)
  let tableBody = []
  if (tables.length > 1) {
    for (let i = 1; i < tables.length; i++) {
      if (tables[i]) {
        tableBody.push(columnsToObject(tables[i]))
      }
    }
  }
  let columns = []
  for (let j = 0; j < tableBody.length; j++) {
    let body = tableBody[j]
    let column = {}
    for (let k = 0; k < body.length; k++) {
      let columnKey = tableHead[k]
      let columnValue = body[k]
      columnKey = columnKey.replace(/\./g, '_')
      column['' + columnKey] = columnValue
    }
    columns.push(column)
  }
  return columns
}

/**
 * 获取index名称
 */
export function getIndexsName (data) {
  let indexsArray = parseIndexs(data)
  let names = []
  for (let i = 0; i < indexsArray.length; i++) {
    let index = indexsArray[i]
    let indexName = index.index
    names.push(indexName)
  }
  return names
}
