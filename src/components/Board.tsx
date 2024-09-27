import React from 'react';
import './Board.css'; 

const Board: React.FC = () => {
  const rows = 20;
  const cols = 10;

  return (
    <div className="board">
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <div key={rowIndex} className="row">
          {Array.from({ length: cols }).map((_, colIndex) => (
            <div key={colIndex} className="cell"></div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
