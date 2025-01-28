interface CellProps {
  value: string | null
  onClick: () => void
}

const Cell: React.FC<CellProps> = ({ value, onClick }) => {
  const cellContent = value === "X" ? "🧧" : value === "O" ? "🐍" : null

  return (
    <button
      className="w-20 h-20 bg-red-700/90 text-4xl flex items-center justify-center rounded-xl transition-all duration-300 hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-md"
      onClick={onClick}
    >
      {cellContent && <span className="cell-content">{cellContent}</span>}
    </button>
  )
}

export default Cell
