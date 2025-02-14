import { useRef } from 'react';
import { useHideIncompleteRowCards, Card } from '@/entities/card';
import './PicturesPage.scss';
import { PICTURES_PAGE_CARDS } from '../config/picturesPageCards';

const PicturesPage = () => {
  const gridRef = useRef<HTMLDivElement | null>(null);
  const cardSelector = 'pictures-page__card';

  useHideIncompleteRowCards({ gridRef, selector: cardSelector });

  return (
    <div className="pictures-page" ref={gridRef}>
      {PICTURES_PAGE_CARDS.map((card, i) => (
        <Card
          key={`pictures-page-card-${i}`}
          selector={cardSelector}
          imageUrl={card.imageUrl}
        >
          {card.text}
        </Card>
      ))}
    </div>
  );
};

export default PicturesPage;
