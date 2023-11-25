import app from './app'

const port = process.env['PORT']
if (port === undefined) {
  console.error('PORT environtal variable not set')
  process.exit(1)
}
if (!(Number.parseInt(port) > 0)) { // NaN > 0 is false
  console.error('PORT is not an integer')
  process.exit(1)
}

// For AWS, set request client source IP address, protocol and host based on
// X-Forwarded-For X-Forwarded-Host and X-Forwarded-Proto
app.set('trust proxy', '10.0.0.0/8,172.16.0.0/12')

const server = app.listen(port, () => {
  console.log(`Express listening on port ${port}`)
})

const exitHandler = (): void => {
  server.close(() => {
    console.info('Server closed')
    process.exit(0)
  })
}

const unexpectedErrorHandler = (error: any): void => {
  console.error(error)
  exitHandler()
}

process.on('uncaughtException', unexpectedErrorHandler)
process.on('unhandledRejection', unexpectedErrorHandler)

process.on('SIGTERM', () => {
  console.info('SIGTERM received')
  process.exit(0)
})

process.on('SIGINT', () => {
  console.info('SIGINT received')
  process.exit(0)
})
