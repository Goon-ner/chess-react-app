import React, { useState, useRef, useEffect } from 'react'
import { Player } from '../models/Player'
import { Colors } from '../models/Colors'

interface TimerProps {
  currentPlayer: Player | null
  restart: () => void
}

const Timer: React.FC<TimerProps> = ({ currentPlayer, restart }) => {
  const [blackTimer, setBlackTimer] = useState(300)
  const [whiteTimer, setWhiteTimer] = useState(300)
  const timer = useRef<null | ReturnType<typeof setInterval>>(null)

  useEffect(() => {
    startTimer()
  }, [currentPlayer])
  function startTimer() {
    if (timer.current) {
      clearInterval(timer.current)
    }
    const callback =
      currentPlayer?.color === Colors.WHITE
        ? decrementWhiteTimer
        : decrementBlackTimer
    timer.current = setInterval(callback, 1000)
  }

  function decrementWhiteTimer() {
    setWhiteTimer((prev) => prev - 1)
  }
  function decrementBlackTimer() {
    setBlackTimer((prev) => prev - 1)
  }

  const handleRestart = () => {
    setBlackTimer(300)
    setWhiteTimer(300)
    restart()
  }

  return (
    <div>
      <div>
        <button onClick={handleRestart}>Restart</button>
      </div>
      <h3>Черные - {blackTimer}</h3>
      <h3>Белые - {whiteTimer}</h3>
    </div>
  )
}

export default Timer
