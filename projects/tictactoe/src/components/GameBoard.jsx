
import { useState } from 'react';
import './GameBoard.css'
import '../App.css'


const intialGameBoard=[
    [null,null,null],
    [null,null,null],
    [null,null,null]
]

export default function GameBoard({onSelectSquare, activePlayerSymbol}){

    const [gameBoard, setGameBoard] = useState(intialGameBoard);

    function handleSelectSquare(rowIndex, colIndex){
        setGameBoard((prevGameBoard)=>{
            const updatedBoard = [...prevGameBoard.map(innerArray=>[...innerArray])];
            updatedBoard[rowIndex][colIndex]=activePlayerSymbol;
            return updatedBoard;
        });
        onSelectSquare();
    }

    return <ol id="GameContainer">
     {/*intialGameBoard*/ gameBoard.map((row , rowIndex)=> <li key={rowIndex}>
        <ol>
            {row.map((playerSymbol, colIndex)=> <li key={colIndex}>
              <button onClick={()=>handleSelectSquare(rowIndex,colIndex)}>{playerSymbol}</button>
            </li>)}
        </ol>
     </li>)}
    </ol>
}