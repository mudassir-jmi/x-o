import Square from "./Square";

const Board = ({ squares, handleClick, winningLine }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {squares.map((square, index) => (
        <Square
          key={index}
          value={square}
          onClick={() => handleClick(index)}
          isWinningSquare={winningLine?.includes(index)}
        />
      ))}
    </div>
  );
};

export default Board;