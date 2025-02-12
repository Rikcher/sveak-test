import './Header.scss';
import { UserAvatar } from '@/entities/user';
import { ThemeToggle } from '@/entities/theme';
import { LanguageSelector } from '@/entities/language';
import { LINKS } from '../config/navLinks';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <nav className="header__navigation">
        <ul className="header__navigation-list">
          {LINKS.map((link) => (
            <li key={link.id} className="header__navigation-item">
              <Link
                to={link.url}
                className="header__navigation-link"
                title={link.label}
              >
                {link.icon}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="header__controls">
        <LanguageSelector />
        <ThemeToggle />
        <UserAvatar />
      </div>
    </header>
  );
};

export default Header;
