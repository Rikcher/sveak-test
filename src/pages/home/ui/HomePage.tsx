import { useRef } from 'react';
import { useHideIncompleteRowCards, Card } from '@/entities/card';
import './HomePage.scss';
import { HOME_PAGE_CARDS } from '@/pages/home/config/homePageCards.ts';

const HomePage = () => {
  const gridRef = useRef<HTMLDivElement | null>(null);
  const cardSelector = 'home-page__card';

  useHideIncompleteRowCards({ gridRef, selector: cardSelector });

  return (
    <div className="home-page" ref={gridRef}>
      {HOME_PAGE_CARDS.map((card, i) => (
        <Card key={`home-page-card-${i}`} selector={cardSelector}>
          {card.text}
        </Card>
      ))}
    </div>
  );
};

export default HomePage;
