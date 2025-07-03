
import './App.css'
import Player from './components/player'
import GameBoard from './components/GameBoard'
import {useState} from 'react'
import Log from './components/Log'

function App() {
  const [gameTurn,setGameTurn]=useState([]);
  const [activePlayer, setActivePlayer] =useState('X');

  function handleSelectSquare(){
    setActivePlayer((curActivePlayer)=>curActivePlayer==='X' ? 'O' : 'X');
    setGameTurn();
  }

 return <main>
  <div className="game-container">
    <ol id="players" className='highlight-player'>
      <Player initialname="Player-1-" symbol="X" isActive={activePlayer==='X'}/>
      <Player initialname="Player-2-" symbol="O" isActive={activePlayer==='O'}/>

    </ol>

    <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer}/>
  </div>
  <Log/>
 </main>
   
  
}

export default App
