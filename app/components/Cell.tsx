interface CellProps {
  value: string | null
  onClick: () => void
}

const Cell: React.FC<CellProps> = ({ value, onClick }) => {
  const cellContent = value === "X" ? "🧧" : value === "O" ? "🐍" : null

  return (
    <button
      className="flex h-20 w-20 items-center justify-center rounded-xl bg-red-700/90 text-4xl shadow-md transition-all duration-300 hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-yellow-400"
      onClick={onClick}
    >
      {cellContent && <span className="cell-content">{cellContent}</span>}
    </button>
  )
}

export default Cell
