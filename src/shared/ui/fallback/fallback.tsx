import { Link } from 'react-router-dom';

import './fallback.scss';

export const Fallback = () => {
  return (
    <div role="alert" className="fallback">
      <h1 className="fallback__title">Something went wrong</h1>
      <Link to="/" className="fallback__link">
        Go to home page
      </Link>
    </div>
  );
};
