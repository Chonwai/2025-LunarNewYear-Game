import Cell from "./Cell"

interface BoardProps {
  board: (string | null)[]
  onClick: (index: number) => void
}

const Board: React.FC<BoardProps> = ({ board, onClick }) => {
  return (
    <div className="grid grid-cols-3 gap-3 rounded-2xl bg-yellow-100/50 p-3 shadow-lg backdrop-blur-sm">
      {board.map((value, index) => (
        <Cell key={index} value={value} onClick={() => onClick(index)} />
      ))}
    </div>
  )
}

export default Board
