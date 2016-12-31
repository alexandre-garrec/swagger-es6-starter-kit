import fs from 'fs'

fs.createReadStream('.sample_env')
  .pipe(fs.createWriteStream('.dev'))
