import React from 'react';

import './Card.scss';
import clsx from 'clsx';

interface CardProps {
  id: number;
  selector: string;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ id, selector, children }) => {
  return (
    <div className={clsx('card', selector)}>
      <div className="card__content-wrapper">
        {children ? children : `Card ${id}`}
      </div>
    </div>
  );
};

export default Card;
