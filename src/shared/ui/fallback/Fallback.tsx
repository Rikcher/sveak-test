import { Link } from 'react-router-dom';

import './Fallback.scss';

const Fallback = () => {
  return (
    <div className="fallback">
      <h1 className="fallback__title">Something went wrong</h1>
      <Link to="/" className="fallback__link">
        Go to home page
      </Link>
    </div>
  );
};

export default Fallback;
