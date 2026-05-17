import Board from "./components/Board";
import React from "react";
import calculateWinner from "./utils/calculateWinner";

function App() {
  const [squares, setSquares] = React.useState(Array(9).fill(null));
  const [xTurn, setXTurn] = React.useState(true);

  const results = calculateWinner(squares);
  const winner = results?.winner;
  const winningLine = results?.line;

  const isDraw = !winner && squares.every(square => square !== null);

  const handleClick = (index) => {
    if (squares[index] || winner) return;

    const updatedSquares = [...squares];
    updatedSquares[index] = xTurn ? "X" : "O";
    setSquares(updatedSquares);
    setXTurn(!xTurn);
  };

  const reserGame = () => {
    setSquares(Array(9).fill(null));
    setXTurn(true);
  };

    const getStatusMessage = () => {
    if (winner) {
      return `🎉 Winner: ${winner}`;
    }

    if (isDraw) {
      return "🤝 It's a Draw!";
    }

    return `Current Turn: ${xTurn ? "X" : "O"}`;
  };


  return (
    <div
      className="
        min-h-screen
        flex
        items-center
        justify-center
        bg-gradient-to-br
        from-slate-900
        via-purple-900
        to-slate-900
        p-4
      "
    >
      <div
        className="
          bg-white/10
          border border-white/10
          backdrop-blur-xl
          rounded-3xl
          p-8
          shadow-2xl
          text-center
        "
      >
        <h1 className="text-5xl font-bold text-white mb-2">
          Tic Tac Toe
        </h1>

        <p className="text-slate-300 mb-6 text-lg">
          {getStatusMessage()}
        </p>

        <Board 
          squares={squares}
          handleClick={handleClick}
        />
        <button
          onClick={reserGame}
          className="
            mt-8
            px-6
            py-3
            rounded-xl
            bg-gradient-to-r
            from-cyan-500
            to-blue-500
            text-white
            font-semibold
            shadow-lg
            hover:scale-105
            transition-all
            duration-300
            active:scale-95
            cursor-pointer
          "
        >
          Reset Game
        </button>
          <p className="text-slate-400 text-sm mt-6">
          Built with React + Tailwind CSS
        </p>
      </div>
    </div>
  );
}

export default App;