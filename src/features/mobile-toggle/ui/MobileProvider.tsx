import React, { useState } from 'react';
import { MobileContext } from '../config/mobileContext';

interface MobileProviderProps {
  readonly children: React.JSX.Element;
}

const MobileProvider: React.FC<MobileProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleIsOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <MobileContext.Provider value={{ isOpen, toggleIsOpen }}>
      {children}
    </MobileContext.Provider>
  );
};

export default MobileProvider;
