import './Footer.scss';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <p className="footer__title">{t('Footer.title')}</p>
      <p className="footer__text">{t('Footer.text')}</p>
    </footer>
  );
};
export default Footer;
