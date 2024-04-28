import React, { useState } from "react";

// Typ pro hodnoty piškvorek
type SquareValue = "X" | "O" | null;

// Komponenta pro jeden čtverec
interface SquareProps {
  value: SquareValue;
  onClick: () => void;
}

function Square({ value, onClick }: SquareProps) {
  return (
    <button
      onClick={onClick}
      style={{
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "3rem",
        border: "1px solid rgba(255, 255, 255, 0.5)", // Tenké světlé linky
        backgroundColor: "transparent",
      }}
    >
      {value === "X" ? (
        <svg height="70" width="70">
          <line
            x1="10"
            y1="10"
            x2="60"
            y2="60"
            stroke="white"
            strokeWidth="4"
          />
          <line
            x1="10"
            y1="60"
            x2="60"
            y2="10"
            stroke="white"
            strokeWidth="4"
          />
        </svg>
      ) : value === "O" ? (
        <svg height="70" width="70">
          <circle
            cx="35"
            cy="35"
            r="25"
            stroke="white"
            strokeWidth="4"
            fill="transparent"
          />
        </svg>
      ) : null}
    </button>
  );
}

// Komponenta pro mřížku piškvorek
function Board() {
  const [squares, setSquares] = useState<SquareValue[]>(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true); // Určuje, kdo je na tahu

  const calculateWinner = (squares: SquareValue[]): SquareValue => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (const [a, b, c] of lines) {
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  const winner = calculateWinner(squares); // Kontrola vítěze

  const handleClick = (index: number) => {
    if (winner || squares[index]) {
      return; // Pokud už máme vítěze nebo je čtverec obsazený
    }
    const newSquares = squares.slice();
    newSquares[index] = xIsNext ? "X" : "O"; // Nastavení hodnoty
    setSquares(newSquares); // Aktualizace stavu
    setXIsNext(!xIsNext); // Přepnutí hráče
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>
        {winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? "X" : "O"}`}
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 10vh)",
          gridTemplateRows: "repeat(3, 10vh)",
          width: "100%",
          height: "10vh", // Celá výška obrazovky
          alignItems: "center",
          justifyContent: "center",
        }}
        className="tic-tac-toe-board"
      >
        {squares.map((value, index) => (
          <Square
            key={index}
            value={value}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Board;
