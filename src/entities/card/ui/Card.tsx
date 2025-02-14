import React from 'react';

import './Card.scss';
import clsx from 'clsx';

interface CardProps {
  selector: string;
  children?: React.ReactNode;
  imageUrl?: string;
}

const Card: React.FC<CardProps> = ({ selector, children, imageUrl }) => {
  return (
    <div
      className={clsx('card', selector)}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="card__content-wrapper">{children}</div>
    </div>
  );
};

export default Card;
