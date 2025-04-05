import { Client } from 'teeworlds'
const client = new Client('127.0.0.1', 8303, 'chillerbot-ts')

client.connect().catch(e => console.log(e))

client.on('connected', () => {
  console.log('Connected!')
})

client.on('disconnect', reason => {
  // you got kicked from the server
  console.log('Disconnected: ' + reason)
})

client.on('message', message => {
  console.log(message.message)
})

process.on('SIGINT', () => {
  client.Disconnect()
    .then(() => process.exit(0))
    .catch((e) => {
      console.log(e)
      process.exit(1)
    })
})
