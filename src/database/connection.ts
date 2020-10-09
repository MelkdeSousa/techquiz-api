import { createConnection } from 'typeorm'

createConnection()
  .then(() => console.log('🎊🎲 Successfuly connection with database'))
  .catch((err) => console.log('🤯🎲 Failed connection with database', err))
