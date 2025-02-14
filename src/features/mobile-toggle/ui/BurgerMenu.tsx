import React from 'react';
import { useMobile } from '../lib/UseMobile';

import './BurgerMenu.scss';
import clsx from 'clsx';

const BurgerMenu: React.FC = () => {
  const { isOpen, toggleIsOpen } = useMobile();
  return (
    <button
      onClick={toggleIsOpen}
      className={clsx('burger-menu', isOpen && 'burger-menu--open')}
    >
      <span className="burger-menu__line burger-menu__line--1"></span>
      <span className="burger-menu__line burger-menu__line--2"></span>
      <span className="burger-menu__line burger-menu__line--3"></span>
    </button>
  );
};
export default BurgerMenu;
