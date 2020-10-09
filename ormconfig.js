require('dotenv/config')

const type = String(process.env.DB_TYPE)
const host = String(process.env.DB_HOST)
const port = Number(process.env.DB_PORT)
const username = String(process.env.DB_USERNAME)
const password = String(process.env.DB_PASSWORD)
const database = String(process.env.DB_DATABASE)

module.exports = {
  type,
  host,
  port,
  username,
  password,
  database,
  synchronize: true,
  logging: false,
  entities: [
    'src/models/**/*.ts'
  ],
  migrations: [
    'src/database/migrations/**/*.ts'
  ],
  cli: {
    migrationsDir: 'src/database/migrations',
    entitiesDir: 'src/models'
  }
}
