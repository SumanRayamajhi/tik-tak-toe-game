import React, { useState } from "react";
import Square from "../Square/Square";
import "./Board.css";

const Board = () => {
  const [player, setPlayer] = useState("Player 1");
  const [winner, setWinner] = useState(null);
  const handleClick = (row, column) => {
    if (winner !== null) {
      return;
    }
    if (player === "Player 1") {
      grid[row][column] = "X";
      setPlayer("Player 2");
    } else {
      grid[row][column] = "O";
      setPlayer("Player 1");
    }
    setWinner(findWinner(grid));
    setGrid(grid);
  };
  const [grid, setGrid] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);

  const reset = () => {
    setGrid([
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ]);
    setPlayer("Player 1");
    setWinner(null);
  };

  const findWinner = (grid) => {
    const winningSymbol = winningCondition(grid);
    if (winningSymbol === null) {
      return null;
    }
    return winningSymbol === "X" ? "Player 1 !" : "Player 2 !";
  };
  const winningCondition = (grid) => {
    if (
      grid[0][0] === grid[0][1] &&
      grid[0][0] === grid[0][2] &&
      grid[0][0] !== ""
    ) {
      return grid[0][0];
    }

    if (
      grid[1][0] === grid[1][1] &&
      grid[1][1] === grid[1][2] &&
      grid[1][0] !== ""
    ) {
      return grid[1][0];
    }
    if (
      grid[2][0] === grid[2][1] &&
      grid[2][1] === grid[2][2] &&
      grid[2][0] !== ""
    ) {
      return grid[2][0];
    }
    if (
      grid[0][0] === grid[1][0] &&
      grid[1][0] === grid[2][0] &&
      grid[0][0] !== ""
    ) {
      return grid[0][0];
    }
    if (
      grid[0][1] === grid[1][1] &&
      grid[1][1] === grid[2][1] &&
      grid[0][1] !== ""
    ) {
      return grid[0][1];
    }
    if (
      grid[0][2] === grid[1][2] &&
      grid[1][2] === grid[2][2] &&
      grid[0][2] !== ""
    ) {
      return grid[0][2];
    }
    if (
      grid[0][0] === grid[1][1] &&
      grid[1][1] === grid[2][2] &&
      grid[0][0] !== ""
    ) {
      return grid[0][0];
    }
    if (
      grid[0][2] === grid[1][1] &&
      grid[1][1] === grid[2][0] &&
      grid[0][2] !== ""
    ) {
      return grid[0][2];
    }

    return null;
  };

  return (
    <div className="gameBoard">
      <div id="statusArea" className="status">
        Next player: <span>{player}</span>
      </div>
      <div id="winnerArea" className="winner">
        Winner: <span>{winner !== null ? winner : "None"}</span>
      </div>
      <button class="buttonStyle" onClick={reset}>
        Reset
      </button>
      <div className="boardStyle">
        <div className="board-row">
          <Square
            onClick={handleClick}
            grid={grid}
            setGrid={setGrid}
            row={0}
            column={0}
          />
          <Square
            onClick={handleClick}
            grid={grid}
            setGrid={setGrid}
            row={0}
            column={1}
          />
          <Square
            onClick={handleClick}
            grid={grid}
            setGrid={setGrid}
            row={0}
            column={2}
          />
        </div>
        <div className="board-row">
          <Square
            onClick={handleClick}
            grid={grid}
            setGrid={setGrid}
            row={1}
            column={0}
          />
          <Square
            onClick={handleClick}
            grid={grid}
            setGrid={setGrid}
            row={1}
            column={1}
          />
          <Square
            onClick={handleClick}
            grid={grid}
            setGrid={setGrid}
            row={1}
            column={2}
          />
        </div>
        <div className="board-row">
          <Square
            onClick={handleClick}
            grid={grid}
            setGrid={setGrid}
            row={2}
            column={0}
          />
          <Square
            onClick={handleClick}
            grid={grid}
            setGrid={setGrid}
            row={2}
            column={1}
          />
          <Square
            onClick={handleClick}
            grid={grid}
            setGrid={setGrid}
            row={2}
            column={2}
          />
        </div>
      </div>
    </div>
  );
};
export default Board;
