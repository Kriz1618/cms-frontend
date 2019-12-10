// Dependencies
import express from 'express'
import next from 'next'
import path from 'path'

// next configurations
const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev })
const handle = nextApp.getRequestHandler()

// Runnig Next App
nextApp.prepare().then(() => {
  const app = express()

  app.all('*', (req, res) => {
    return handle(req, res)
  })

  // Listen on port 3000
  app.listen(3000)
})