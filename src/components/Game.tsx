import React, { useState, useEffect } from 'react';
import Board from './Board';
import { TETROMINOES, TetrominoShape } from './Tetrominoes';
import './Game.css';

const Game: React.FC = () => {
  const [currentTetromino, setCurrentTetromino] = useState<TetrominoShape | null>(null);

  useEffect(() => {
    const tetrominoKeys = Object.keys(TETROMINOES) as Array<keyof typeof TETROMINOES>;
    const randomTetromino = TETROMINOES[tetrominoKeys[Math.floor(Math.random() * tetrominoKeys.length)]];
    setCurrentTetromino(randomTetromino);
  }, []);

  return (
    <div className="game">
      <Board />
      {currentTetromino && (
        <div className="tetromino">
          {currentTetromino.map((row, rowIndex) => (
            <div key={rowIndex} className="row">
              {row.map((cell, colIndex) => (
                <div key={colIndex} className={`cell ${cell ? 'filled' : ''}`}></div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Game;
