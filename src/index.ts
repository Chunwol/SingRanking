import app from './app'
import https from 'https'
import fs from 'fs'
import { 
  webPort, webHost
} from './config/env'
import dotenv from "dotenv"
dotenv.config()

const options = {
	key: fs.readFileSync(__dirname+'/config/keys/private.key'),
	cert: fs.readFileSync(__dirname+'/config/keys/certificate.crt')
};

const port = normalizePort(webPort);
app.set('port', port)
const server = https.createServer(options, app)

server.listen(Number(port), webHost)
server.on('listening', onListening)

function onListening() {
  const addr = server.address()
  if (!addr) return
  const bind = typeof addr === 'string' ? 'pipe ' + addr : addr.port
  console.log('[@] Complete.')
  console.log('[@] host: ' + addr.address)
  console.log('[@] port: ' + bind)
}


function normalizePort(val: string) {
  var port = parseInt(val, 10)

  if (isNaN(port)) {
    // named pipe
    return val
  }

  if (port >= 0) {
    // port number
    return port
  }

  return false
}