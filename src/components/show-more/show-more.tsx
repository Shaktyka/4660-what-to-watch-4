import * as React from 'react';

interface ShowMoreProps {
  onShowMoreClick(): void;
}

const ShowMore: React.FC<ShowMoreProps> = ({
  onShowMoreClick
}: ShowMoreProps) => {

  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={() => onShowMoreClick()}
      >
          Show more
      </button>
    </div>
  );
};

export default ShowMore;
