export const checkWinner = (board: (string | null)[]): string | null => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a]
    }
  }

  if (board.every((cell) => cell !== null)) {
    return "draw"
  }

  return null
}

// 新增：隨機選擇一個可用的位置
export const getRandomMove = (board: (string | null)[]): number => {
  const availableSpots = board.reduce((acc: number[], cell, index) => {
    if (cell === null) {
      acc.push(index)
    }
    return acc
  }, [])

  const randomIndex = Math.floor(Math.random() * availableSpots.length)
  return availableSpots[randomIndex]
}

export const minimax = (board: (string | null)[], player: string) => {
  const availableSpots = board.reduce((acc: number[], cell, index) => {
    if (cell === null) {
      acc.push(index)
    }
    return acc
  }, [])

  if (checkWinner(board) === "X") {
    return { score: -10 }
  } else if (checkWinner(board) === "O") {
    return { score: 10 }
  } else if (availableSpots.length === 0) {
    return { score: 0 }
  }

  const moves = []

  for (let i = 0; i < availableSpots.length; i++) {
    const move: { index?: number; score?: number } = {}
    move.index = availableSpots[i]
    board[availableSpots[i]] = player

    if (player === "O") {
      const result = minimax(board, "X")
      move.score = result.score
    } else {
      const result = minimax(board, "O")
      move.score = result.score
    }

    board[availableSpots[i]] = null
    moves.push(move)
  }

  let bestMove
  if (player === "O") {
    let bestScore = Number.NEGATIVE_INFINITY
    for (let i = 0; i < moves.length; i++) {
      if (moves[i].score !== undefined && moves[i].score > bestScore) {
        bestScore = moves[i].score
        bestMove = i
      }
    }
  } else {
    let bestScore = Number.POSITIVE_INFINITY
    for (let i = 0; i < moves.length; i++) {
      if (moves[i].score !== undefined && moves[i].score < bestScore) {
        bestScore = moves[i].score
        bestMove = i
      }
    }
  }

  return moves[bestMove!]
}

// 新增：根據難度選擇下一步
export const getNextMove = (board: (string | null)[], difficulty: string): number => {
  switch (difficulty) {
    case "easy":
      return getRandomMove(board)
    case "medium":
      // 在中等難度下，有 70% 的機會使用 MinMax，30% 的機會隨機下棋
      return Math.random() < 0.7 ? minimax(board, "O").index : getRandomMove(board)
    case "hard":
      return minimax(board, "O").index
    default:
      return getRandomMove(board)
  }
}

