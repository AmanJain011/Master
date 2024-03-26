import { useEffect, useRef, useState } from 'react'
import codeSync from '../assets/code-sync.png'
import Client from '../components/Client'
import Editor from '../components/Editor'
import { initSocket } from '../socket'
import ACTIONS from '../Actions'
import { Navigate, useLocation, useNavigate, useParams } from 'react-router-dom'
import toast from 'react-hot-toast'

const EditorPage = () => {
    const socketRef = useRef(null)
    const location = useLocation()
    const {roomId} = useParams()
    const reactNavigator = useNavigate()
    const [code, setCode] = useState('')

    const [clients, setClients] = useState([])

    useEffect(()=>{
        const init = async () => {
            socketRef.current = await initSocket()
            socketRef.current.on('connect_error', (err)=>handleErrors(err))
            socketRef.current.on('connect_failed', (err)=>handleErrors(err))

            function handleErrors(e){
                console.log("socket error", e)
                toast.error('Socket Connection failed try again later')
                reactNavigator('/')
            }
            socketRef.current.emit(ACTIONS.JOIN, {
                roomId,
                username: location.state?.userName
            })
            socketRef.current.on(ACTIONS.JOINED, ({clients, username, socketId}) => {
                if(username !== location.state.userName){
                    toast.success(`${username} joined the room.`)
                }
                setClients([...clients])
            })
            socketRef.current.on(ACTIONS.DISCONNECTED, ({socketId, username})=>{
                toast.success(`${username} left the room.`)
                setClients((prev) => {
                    return prev.filter(
                        (client) => client.socketId !== socketId
                    )
                })
            })
            socketRef.current.on("typing", (val)=>{
                setCode(val)
            })
        }
        init()

        return () => {
            socketRef.current.off(ACTIONS.JOINED)
            socketRef.current.off(ACTIONS.DISCONNECTED)
            socketRef.current.off("typing")
            socketRef.current.disconnect()
        }
    }, [])

    if(!location.state){
        return <Navigate to="/"/>
    }

    return (
        <div className="mainWrap">
            <div className="aside">
                <div className="asideInner">
                    <div className="logo">
                        <img className='logoImage' src={codeSync} alt="code-sync-logo"/>
                    </div>
                    <h3>Connected</h3>
                    <div className='clientsList'>
                        {
                            clients.map((client)=>(
                                <Client key={client.socketId} username={client.username}/>
                            ))
                        }
                    </div>
                </div>
                <button className='btn copyBtn'>Copy ROOM ID</button>
                <button className='btn leaveBtn'>Leave</button>
            </div>
            <div className="editorWrap">
                <Editor socketRef={socketRef} roomId={roomId} code={code} setCode={setCode}/>
            </div>
        </div>
    )
}

export default EditorPage