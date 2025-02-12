import { Select, ConfigProvider, theme as AntdTheme } from 'antd';
import { useTranslation } from 'react-i18next';

import { useTheme } from '@/entities/theme/@x/language';

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const { theme } = useTheme();
  const { defaultAlgorithm, darkAlgorithm } = AntdTheme;

  const handleLanguageChange = (value: string) => {
    i18n.changeLanguage(value);
  };

  return (
    <ConfigProvider
      theme={{
        algorithm: theme === 'dark' ? darkAlgorithm : defaultAlgorithm,
        token: {
          colorPrimary: theme === 'dark' ? '#4D7FFF' : '#3427E7',
        },
      }}
    >
      <Select
        defaultValue={localStorage.getItem('i18nextLng')}
        onChange={handleLanguageChange}
        className="language-selector"
      >
        <Select.Option value="ru">RU</Select.Option>
        <Select.Option value="en">EN</Select.Option>
      </Select>
    </ConfigProvider>
  );
};

export default LanguageSelector;
