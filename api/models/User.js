import Sequelize from 'sequelize'
import db from '../../config/db'

const User = {
  email: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  },
  firstname: {
    type: Sequelize.STRING
  },
  lastname: {
    type: Sequelize.STRING
  },
  picture: {
    type: Sequelize.STRING
  }
}

export default db.define('users', User, { freezeTableName: true })
