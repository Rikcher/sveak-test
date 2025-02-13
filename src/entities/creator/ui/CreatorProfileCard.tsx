import './CreatorProfileCard.scss';
import { Avatar } from 'antd';
import { Creator } from '../model/types';
import React from 'react';

interface CreatorProfileCardProps {
  creator: Creator;
}

const getInitials = (name: string) => {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();
};

const CreatorProfileCard: React.FC<CreatorProfileCardProps> = ({ creator }) => {
  return (
    <button className="creator-profile-card">
      <Avatar
        className="creator-profile-card__avatar"
        src={creator.imageUrl || undefined}
      >
        {getInitials(creator.name)}
      </Avatar>
      <p className="creator-profile-card__name">{creator.name}</p>
    </button>
  );
};
export default CreatorProfileCard;
