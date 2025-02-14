import { useContext } from 'react';
import { MobileContext } from '../config/mobileContext';

export const useMobile = () => {
  const context = useContext(MobileContext);
  if (!context) {
    throw new Error('useMobile must be used within a MobileProvider');
  }
  return context;
};
