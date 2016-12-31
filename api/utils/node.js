import chalk from 'chalk'

export const log = (message, color = 'green') =>
  process.env.NODE_ENV === 'production'
    ? false
    : console.log(chalk[color](message))

export const exit = (error = 0) => process.exit(error)

export const isProduction = process.env.NODE_ENV === 'production'
