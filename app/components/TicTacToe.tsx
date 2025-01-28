"use client"

import { useState, useEffect } from "react"
import Board from "./Board"
import { checkWinner, getNextMove } from "../utils/gameLogic"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import confetti from "canvas-confetti"

type Difficulty = "easy" | "medium" | "hard"

const difficultyEmoji = {
  easy: "🌸 花開富貴",
  medium: "🎋 竹報平安",
  hard: "🔥 蛇舞鳳翔",
}

const difficultyText = {
  easy: "（簡單）",
  medium: "（中等）",
  hard: "（困難）",
}

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [isXNext, setIsXNext] = useState(true)
  const [gameOver, setGameOver] = useState(false)
  const [winner, setWinner] = useState(null)
  const [difficulty, setDifficulty] = useState<Difficulty>("medium")

  useEffect(() => {
    if (!isXNext && !gameOver) {
      const aiMove = getNextMove([...board], difficulty)
      setTimeout(() => handleClick(aiMove), 500)
    }
  }, [isXNext, gameOver, board, difficulty])

  const handleClick = (index: number) => {
    if (board[index] || gameOver) return

    const newBoard = [...board]
    newBoard[index] = isXNext ? "X" : "O"
    setBoard(newBoard)

    const result = checkWinner(newBoard)
    if (result) {
      setGameOver(true)
      setWinner(result as any)
      if (result !== "draw") {
        triggerConfetti()
      }
    } else {
      setIsXNext(!isXNext)
    }
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setIsXNext(true)
    setGameOver(false)
    setWinner(null)
  }

  const triggerConfetti = () => {
    const duration = 5 * 1000
    const animationEnd = Date.now() + duration
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 }

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min
    }

    const interval: NodeJS.Timeout = setInterval(() => {
      const timeLeft = animationEnd - Date.now()

      if (timeLeft <= 0) {
        return clearInterval(interval)
      }

      const particleCount = 50 * (timeLeft / duration)

      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
          colors: ["#ff0000", "#ffa500", "#ffff00", "#008000", "#0000ff", "#4b0082", "#ee82ee"],
          emojis: ["🧧", "🐍", "🎊", "✨"],
          scalar: randomInRange(0.4, 1),
        }),
      )

      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
          colors: ["#ff0000", "#ffa500", "#ffff00", "#008000", "#0000ff", "#4b0082", "#ee82ee"],
          emojis: ["🧧", "🐍", "🎊", "✨"],
          scalar: randomInRange(0.4, 1),
        }),
      )
    }, 250)
  }

  return (
    <div className="flex flex-col items-center bg-yellow-50/90 p-8 rounded-lg shadow-lg backdrop-blur-sm">
      <div className="mb-6 flex items-center gap-4">
        <Label htmlFor="difficulty" className="text-red-800 font-bold">
          難度選擇：
        </Label>
        <Select value={difficulty} onValueChange={(value: Difficulty) => setDifficulty(value)}>
          <SelectTrigger className="w-[180px] bg-red-700 text-yellow-50 border-none">
            <SelectValue placeholder="選擇難度" />
          </SelectTrigger>
          <SelectContent>
            {Object.entries(difficultyText).map(([key, text]) => (
              <SelectItem key={key} value={key}>
                {difficultyEmoji[key as Difficulty]} {text}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Board board={board} onClick={handleClick} />

      {gameOver && (
        <div className="mt-4 text-2xl font-bold text-red-800">
          {winner === "draw" ? "平局！再來一局吧！" : `${winner === "X" ? "🧧" : "🐍"} 贏了！恭喜！`}
        </div>
      )}

      <button
        className="mt-4 rounded bg-red-700 px-6 py-2 font-bold text-yellow-50 hover:bg-red-800 transition-colors duration-300 shadow-md rounded-md"
        onClick={resetGame}
      >
        開始新遊戲 🎊
      </button>
    </div>
  )
}

export default TicTacToe

