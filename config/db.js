import Sequelize from 'sequelize'
import { log } from '../api/utils/node'

const { DB_NAME, DB_USER, DB_PASS, DB_HOST, DB_LOGGING } = process.env

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  host: DB_HOST,
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
  logging: DB_LOGGING === 'true' ? (msg) => log(msg, 'blue') : false
})

export default sequelize
