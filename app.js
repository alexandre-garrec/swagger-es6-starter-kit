import SwaggerExpress from 'swagger-express-mw'
import express from 'express'
import Security from './api/security/securityHandlers'
import swaggerUi from 'swagger-ui-express'
import { log } from './api/utils/node'
import { APP_ROOT } from './config/config'
import morgan from 'morgan'
import './config'

const app = express()

const config = {
  appRoot: APP_ROOT,
  swaggerSecurityHandlers: Security
}

app.use(morgan(process.env.LOG))

SwaggerExpress.create(config, (err, swaggerExpress) => {
  if (err) { throw err }

  // install middleware
  swaggerExpress.register(app)

  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerExpress.runner.swagger, true))

  const port = process.env.PORT || 10010

  app.listen(port)

  log(`Server start http://127.0.0.1:${port}`)
})

export default app // for testing
