import Sequelize from 'sequelize'
import sequelize from '../../config/db'
import fs from 'fs'
import path from 'path'

const db = fs.readdirSync(__dirname)
  .filter(file => (file.indexOf('.') !== 0) && (file !== 'index.js'))
  .reduce((memo, file) => {
    const model = sequelize.import(path.join(__dirname, file))
    return {
      ...memo,
      [model.name]: model
    }
  }, {})

Object.keys(db).forEach(modelName => {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db[modelName], db)
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

export default db
