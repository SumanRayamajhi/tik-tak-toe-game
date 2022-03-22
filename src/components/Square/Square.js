import "./Square.css";
const Square = ({ onClick, row, column, grid }) => {
  return (
    <div className="square" onClick={() => onClick(row, column)}>
      {grid[row][column]}
    </div>
  );
};

export default Square;
