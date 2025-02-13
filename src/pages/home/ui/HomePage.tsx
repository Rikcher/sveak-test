import { useTranslation } from 'react-i18next';

const HomePage = () => {
  const { t } = useTranslation();

  return <div className="home-page">{t('HomePage.hello')}</div>;
};
export default HomePage;
