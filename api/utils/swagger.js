
export const getParams = ({ swagger: { params = {} } }, array) =>
  array.reduce((memo, val) =>
    ({ ...memo, [val]: params[val] ? params[val].value : '' }), {})

export const queryMaker = ({ query = {} }) =>
  Object.keys(query).reduce((memo, key) =>
    ({ where: { ...memo.where, [key]: { $like: `%${query[key]}%` } } }), { where: {} })
