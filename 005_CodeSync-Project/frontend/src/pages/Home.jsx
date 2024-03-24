import { useState } from "react";
import codeSync from "../assets/code-sync.png";
import {v4 as uuidV4} from 'uuid'
import toast from 'react-hot-toast'
import { useNavigate } from "react-router-dom";

const Home = () => {
    const [roomId, setRoomId] = useState('')
    const [userName, setUserName] = useState('')
    const navigate = useNavigate()

    const createNewRoom = (e) =>{
        e.preventDefault()
        const id = uuidV4()
        setRoomId(id)
        toast.success("Created a new room.")
    }

    const joinRoom = () => {
        if(!roomId || !userName){
            toast.error('ROOM ID & USERNAME is required.')
            return
        }
        //redirect
        navigate(`/editor/${roomId}`, {
            state:{
                userName
            }
        })
    }

    const handleInputEnter = (e) => {
        if(e.code  === 'Enter'){
            joinRoom()
        }
    }

  return (
    <div className="homePageWrapper">
      <div className="fromWrapper">
        <img className="homePageLogo" src={codeSync} alt="code-sync-logo" />
        <h4 className="mainLabel">Paste invitation ROOM ID</h4>
        <div className="inputGroup">
          <input
           type="text" 
           placeholder="ROOM ID"
           value={roomId} 
           onChange={(e)=>setRoomId(e.target.value)}
           className="inputBox"
           onKeyUp={handleInputEnter}
          />
          <input
           type="text" 
           placeholder="USERNAME"
           value={userName}
           onChange={(e)=>setUserName(e.target.value)}
           className="inputBox"
           onKeyUp={handleInputEnter}
          />
          <button className="btn joinBtn" onClick={joinRoom}>Join</button>
          <span className="createInfo">
          If you don't have an invite then create &nbsp;
          <a href="" className="createNewBtn" onClick={createNewRoom}>new room</a>
        </span>
        </div>
      </div>
      <footer>
        <h4>Built with ❤️ by{' '}
            <a href="">Aman Jain</a>
        </h4>
      </footer>
    </div>
  );
};

export default Home;
