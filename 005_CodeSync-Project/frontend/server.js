import express from 'express'
import http from 'http'
import {Server} from 'socket.io'
import ACTIONS from './src/Actions.js'

const app = express()

const server = http.createServer(app)

const io = new Server(server)

const userSocketMap = {}
function getAllConnectedClients(roomId){
    //Map
    return Array.from(io.sockets.adapter.rooms.get(roomId) || []).map((socketId)=>{
        return {
            socketId, 
            username: userSocketMap[socketId]
        }
    })
}

io.on('connection', (socket)=>{
    console.log("socket connected", socket.id)

    socket.on(ACTIONS.JOIN, ({roomId, username}) => {
        userSocketMap[socket.id] = username
        socket.join(roomId)
        const clients = getAllConnectedClients(roomId)
        clients.forEach(({socketId})=>{
            io.to(socketId).emit(ACTIONS.JOINED, {
                clients,
                username,
                socketId: socket.id
            })
        })
    })
    socket.on("typing", ({val, roomId})=>{
        io.to(roomId).emit("typing", val)
    })

    socket.on("disconnecting", () => {
        const rooms = [...socket.rooms]
        rooms.forEach((roomId)=>{
            socket.in(roomId).emit(ACTIONS.DISCONNECTED, {
                socketId: socket.id,
                username: userSocketMap[socket.id]
            })
        })
        delete userSocketMap[socket.id]
        socket.leave()
    })
})

const port = process.env.PORT || 5000

server.listen(port, ()=>{
    console.log(`Server is connected on ${port}`)
})