const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],

  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],

  [0, 4, 8],
  [2, 4, 6],
];

const calculateWinner = (squares) => {
  for (let combination of winningCombinations) {
    const [a, b, c] = combination;

    if (
      squares[a] &&
      squares[a] === squares[b] &&
      squares[a] === squares[c]
    ) {
      return {
        winner: squares[a],
        line: combination,
      }
    }
  }

  return null;
};

export default calculateWinner;