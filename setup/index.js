import fs from 'fs'
import { APP_ROOT } from '../config/config'
import { log } from '../api/utils/node'

log(' - .env file')

fs.createReadStream(`${APP_ROOT}setup/.sample_env`)
  .pipe(fs.createWriteStream(`${APP_ROOT}.env`))
