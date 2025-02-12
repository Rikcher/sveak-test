import { useTheme } from '@/entities/theme';
import { useTranslation } from 'react-i18next';

const HomePage = () => {
  const { toggleTheme } = useTheme();
  const { t, i18n } = useTranslation();
  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language);
  };
  return (
    <div>
      {t('HomePage.hello')}
      <button onClick={toggleTheme}>theme</button>
      <div>
        <button onClick={() => handleLanguageChange('en')}>English</button>
        <button onClick={() => handleLanguageChange('ru')}>Русский</button>
      </div>
    </div>
  );
};
export default HomePage;
