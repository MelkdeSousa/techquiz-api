import 'reflect-metadata'
import 'dotenv/config'
import express from 'express'

import '@database/connection'

const PORT = process.env.PORT
const app = express()

app.use(express.json())

app.get('/', (_, res) => res.sendStatus(200))

app.listen(PORT, () => console.log(`🏃🖥️ Server running in http://localhost:${PORT}`))
