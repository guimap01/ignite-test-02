import React from 'react';

interface IHeader {
  selectedGenre: { title: string };
}

export const Header: React.FC<IHeader> = ({ selectedGenre }) => {
  return (
    <header>
      <span className="category">
        Categoria:<span> {selectedGenre.title}</span>
      </span>
    </header>
  );
};
