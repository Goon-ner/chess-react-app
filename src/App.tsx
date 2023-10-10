import React, { useState, useEffect } from 'react'
import './App.css'
import BoardComponent from './components/BoardComponent'
import { Board } from './models/Board'
import { Player } from './models/Player'
import { Colors } from './models/Colors'
import LostFigures from './components/LostFigures'
import Timer from './components/Timer'

function App() {
  const [board, setBoard] = useState(new Board())
  const [whitePlayer, setWhitePlayer] = useState(new Player(Colors.WHITE))
  const [blackPlayer, setBlackPlayer] = useState(new Player(Colors.BLACK))
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null)

  useEffect(() => {
    restart()
    setCurrentPlayer(whitePlayer)
  }, [])

  function restart() {
    const newBoard = new Board()
    newBoard.initCells()
    newBoard.addFigures()
    setBoard(newBoard)
    setCurrentPlayer(whitePlayer)
  }

  function swapPlayer() {
    setCurrentPlayer(
      currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer
    )
  }

  return (
    <div className="App">
      <div className="timer">
        <Timer currentPlayer={currentPlayer} restart={restart} />
        <div>
          <h3>Текущий ход:</h3>
          <h3>{currentPlayer?.color === Colors.WHITE ? 'Белые' : 'Черные'}</h3>
        </div>
      </div>
      <BoardComponent
        board={board}
        setBoard={setBoard}
        currentPlayer={currentPlayer}
        swapPlayer={swapPlayer}
      />
      <div className="lost">
        <div className="lostBlack">
          <LostFigures
            title="Черные фигуры:"
            figures={board.lostBlackFigures}
          />
        </div>
        <div className="lostWhite">
          <LostFigures title="Белые фигуры:" figures={board.lostWhiteFigures} />
        </div>
      </div>
    </div>
  )
}

export default App
