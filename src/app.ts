import express from 'express'
import routes from '@routes/index'
import httpStatus from 'http-status'

const app = express()

// Ping healtcheck route
app.get('/_ping', (_req, res) => res.send({ ok: true }))

// Import routes from routes folder
app.use('/', routes)

// send back a 404 error for any unknown api request
app.use((req, res) => {
  console.log('404:', req.method, req.originalUrl)
  res.sendStatus(httpStatus.NOT_FOUND)
})

export default app
