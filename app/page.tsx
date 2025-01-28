import TicTacToe from "./components/TicTacToe"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-red-400 bg-cover bg-center bg-no-repeat">
      <div className="mx-auto flex w-full max-w-4xl flex-1 flex-col items-center py-12">
        <h1 className="mb-8 rounded-2xl bg-yellow-50/80 px-6 py-3 text-center text-4xl font-bold text-red-800 shadow-lg">
          2025蛇年過三關🐍
          <span className="mt-2 block text-2xl">新年快樂🎉恭喜發財💰</span>
        </h1>
        <TicTacToe />
      </div>
      <footer className="w-full py-4 text-center font-semibold text-yellow-50">
        <p>
          Made with ❤️ by{" "}
          <a
            href="https://github.com/Chonwai"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-300 hover:text-yellow-200"
          >
            Edison Un 🧑🏻‍💻
          </a>{" "}
          |{" "}
          <a
            href="https://business.travel3exp.xyz/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-300 hover:text-yellow-200"
          >
            Travel3 🚀
          </a>
        </p>
      </footer>
    </main>
  )
}
