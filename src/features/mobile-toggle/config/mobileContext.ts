import { createContext } from 'react';

export interface MobileContext {
  isOpen: boolean;
  toggleIsOpen: () => void;
}

export const MobileContext = createContext<MobileContext>({
  isOpen: false,
  toggleIsOpen: () => {},
});
