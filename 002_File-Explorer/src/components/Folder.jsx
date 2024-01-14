import { useState } from "react"

const Folder = ({explorer}) => {
  const [expand, setExpand] = useState(false)
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: null
  })

  const handleNewFolder = (e, isFolder) => {
    e.stopPropagation()
    setExpand(true)
    setShowInput({
      visible: true,
      isFolder
    })
  }

  const onAddFolder = (e) =>{
    if(e.keyCode === 13 && e.target.value){
      setShowInput({...showInput, visible:false})
    }
  }

  if(explorer.isFolder){
    return (
      <div>
        <div className="folder" onClick={()=>setExpand(!expand)}>
          <span>📁 {explorer.name}</span>

          <div>
            <button onClick={(e)=>handleNewFolder(e, true)}>Folder +</button>
            <button onClick={(e)=>handleNewFolder(e, false)}>File +</button>
          </div>
        </div>
  
        <div style={{display: expand ? "block": "none", paddingLeft: 25}}>
          {showInput.visible && (
            <div className="inputContainer">
              <span>{showInput.isFolder? '📁':'📄'}</span>
              <input
               type="text" 
               className="inputContainer__input"
               autoFocus
               onBlur={()=>setShowInput({...showInput, visible:false})}
               onKeyDown={(e) => onAddFolder(e)}
               />
            </div>
          )}
          {explorer.items.map((exp) => {
            return <Folder explorer={exp} key={exp.id}/>
          })}
        </div>
      </div>
    )
  }else{
    return <span className="file">📄{explorer.name}</span>
  }
}

export default Folder