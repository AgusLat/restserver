import * as dotenv from 'dotenv' 
dotenv.config() //TO SEND OUR process.env DATA THROUGH A .env FILE

import {Server} from './models/server.js'

const server = new Server()

server.listen()






