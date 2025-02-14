import React, { useEffect, useState } from 'react';

interface useHideIncompleteRowCardsProps {
  gridRef: React.RefObject<HTMLDivElement | null>;
  selector: string;
}

const useHideIncompleteRowCards = ({
  gridRef,
  selector,
}: useHideIncompleteRowCardsProps) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const cards = Array.from(
      grid.querySelectorAll(`.${selector}`)
    ) as HTMLElement[];
    const columnCount = window
      .getComputedStyle(grid)
      .getPropertyValue('grid-template-columns')
      .split(' ').length;

    if (cards.length <= columnCount) {
      cards.forEach((card) => (card.style.display = 'block'));
      return;
    }

    const incompleteRowCards = cards.length % columnCount;
    cards.forEach((card) => (card.style.display = 'block'));

    if (incompleteRowCards > 0) {
      cards
        .slice(-incompleteRowCards)
        .forEach((card) => (card.style.display = 'none'));
    }
  }, [windowWidth]);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setWindowWidth(window.innerWidth);
      }, 200);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
};

export default useHideIncompleteRowCards;
