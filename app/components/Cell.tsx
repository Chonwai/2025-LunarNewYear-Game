interface CellProps {
  value: string | null
  onClick: () => void
}

const Cell: React.FC<CellProps> = ({ value, onClick }) => {
  const cellContent = value === "X" ? "🧧" : value === "O" ? "🐍" : null

  return (
    <button
      className={`flex h-20 w-20 items-center justify-center rounded-xl shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 ${
        value
          ? "bg-gradient-to-br from-red-500/90 to-red-600/90 hover:from-red-600/90 hover:to-red-700/90"
          : "bg-red-700/90 hover:bg-red-800"
      }`}
      onClick={onClick}
    >
      {cellContent && <span className="cell-content">{cellContent}</span>}
    </button>
  )
}

export default Cell
