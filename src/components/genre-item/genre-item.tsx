import * as React from 'react';

interface GenreItem {
  genre: string;
  isActive: boolean;
  onGenreClick(genre: string): void;
}

const GenreItem: React.FC<GenreItem> = ({
  genre, isActive, onGenreClick
}: GenreItem) => {

  const activeClass = isActive ? `catalog__genres-item--active` : ``;

  return (
    <li
      className={`catalog__genres-item ${activeClass}`}
      onClick={(evt) => {
        evt.preventDefault();
        onGenreClick(genre);
      }}
    >
      <a href="#" className="catalog__genres-link">
        {genre}
      </a>
    </li>
  );
};

export default GenreItem;
