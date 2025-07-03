import { useState } from "react"
import '../App.css'

export default function Player({initialname,symbol,isActive}){
    const[playerName,setPlayerName]=useState(initialname)
    const [isEditing, setIsEditing]=useState(false);

    function handleEditClick(){
        // setIsEditing(!isEditing);
        setIsEditing((isEditing)=>!isEditing);
    }

    function Change(event){
        setPlayerName(event.target.value);
    }

    let editableplayerName=<span id='playerName'>{playerName}</span>
    // let btnCaption='Edit'

    if(isEditing){
        editableplayerName=<input type="text" required value={playerName} onChange={Change}/>
        // btnCaption="Save"
    }

    return  <li className={isActive ? 'active' :undefined}>
        <span id="playerinfo">
          {editableplayerName}
          <span id='playerSymbol'>{symbol}</span>
        </span>
        <button onClick={handleEditClick}>{isEditing ? 'save' :'Edit'}</button>
      </li>
}