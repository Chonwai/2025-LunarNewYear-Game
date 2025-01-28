import TicTacToe from "./components/TicTacToe"

export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center bg-cover bg-center bg-no-repeat bg-red-400"
    >
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
        <h1 className="mb-8 text-4xl font-bold text-red-800 text-center bg-yellow-50/80 px-6 py-3 rounded-lg shadow-lg">
          2025蛇年過三關🐍
          <span className="block text-2xl mt-2">新年快樂🎉恭喜發財🎉</span>
        </h1>
        <TicTacToe />
      </div>
    </main>
  )
}

