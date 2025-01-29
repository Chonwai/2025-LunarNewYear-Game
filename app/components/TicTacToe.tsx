"use client"

import { useState, useEffect, useCallback } from "react"
import Board from "./Board"
import { checkWinner, getNextMove } from "../utils/gameLogic"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import confetti from "canvas-confetti"

type Difficulty = "easy" | "medium" | "hard"
type Winner = "X" | "O" | "draw" | null

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
  const [winner, setWinner] = useState<Winner>(null)
  const [difficulty, setDifficulty] = useState<Difficulty>("medium")
  const [showHint, setShowHint] = useState(true)

  const triggerConfetti = useCallback(() => {
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
        })
      )

      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
          colors: ["#ff0000", "#ffa500", "#ffff00", "#008000", "#0000ff", "#4b0082", "#ee82ee"],
          emojis: ["🧧", "🐍", "🎊", "✨"],
          scalar: randomInRange(0.4, 1),
        })
      )
    }, 250)
  }, [])

  useEffect(() => {
    if (!isXNext && !gameOver) {
      const aiMove = getNextMove([...board], difficulty)
      const timeoutId = setTimeout(() => handleClick(aiMove), 500)
      return () => clearTimeout(timeoutId)
    }
  }, [isXNext, gameOver, board, difficulty, handleClick])

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHint(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const handleClick = useCallback(
    (index: number) => {
      if (board[index] || gameOver) return

      const newBoard = [...board]
      newBoard[index] = isXNext ? "X" : "O"
      setBoard(newBoard)

      const result = checkWinner(newBoard)
      if (result) {
        setGameOver(true)
        setWinner(result as Winner)
        if (result !== "draw") {
          triggerConfetti()
        }
      } else {
        setIsXNext(!isXNext)
      }
    },
    [board, gameOver, isXNext, triggerConfetti]
  )

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setIsXNext(true)
    setGameOver(false)
    setWinner(null)
  }

  return (
    <div className="flex flex-col items-center rounded-2xl bg-yellow-50/90 p-8 shadow-lg backdrop-blur-sm">
      {showHint && (
        <div className="mb-6 rounded-xl bg-red-700/95 p-4 text-center text-xl font-bold text-yellow-50 shadow-lg">
          <p>點擊格子放置紅包 🧧</p>
          <p>小心別讓蛇🐍連成一線！</p>
        </div>
      )}

      <div className="mb-6 flex items-center gap-4">
        <Label htmlFor="difficulty" className="font-bold text-red-800">
          難度選擇：
        </Label>
        <Select value={difficulty} onValueChange={(value: Difficulty) => setDifficulty(value)}>
          <SelectTrigger className="w-[180px] rounded-xl border-none bg-red-700 text-yellow-50">
            <SelectValue placeholder="選擇難度" />
          </SelectTrigger>
          <SelectContent className="overflow-hidden rounded-xl border-yellow-50 bg-yellow-50">
            {Object.entries(difficultyText).map(([key, text]) => (
              <SelectItem
                key={key}
                value={key}
                className="cursor-pointer hover:bg-red-100 focus:bg-red-100"
              >
                {difficultyEmoji[key as Difficulty]} {text}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Board board={board} onClick={handleClick} />

      {gameOver && (
        <div className="mt-4 text-2xl font-bold text-red-800">
          {winner === "draw"
            ? "平局！再來一局吧！"
            : `${winner === "X" ? "🧧" : "🐍"} 贏了！恭喜！`}
        </div>
      )}

      <div className="flex flex-col gap-4">
        <button
          className="mt-4 rounded-xl bg-red-700 px-6 py-2 font-bold text-yellow-50 shadow-md transition-colors duration-300 hover:bg-red-800"
          onClick={resetGame}
        >
          開始新遊戲 🎊
        </button>

        <a
          href="https://business.travel3exp.xyz/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl bg-red-700 px-6 py-2 text-center font-bold text-yellow-50 shadow-md transition-colors duration-300 hover:bg-red-800"
        >
          了解更多 Travel 3 🎮
        </a>
      </div>
    </div>
  )
}

export default TicTacToe
