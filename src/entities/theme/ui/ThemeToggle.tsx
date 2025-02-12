import { Dropdown, MenuProps, ConfigProvider, theme as AntdTheme } from 'antd';
import { Moon, Sun } from 'lucide-react';

import './ThemeToggle.scss';
import { useTheme } from '../lib/useTheme';
import { Theme } from '../config/themeContext';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const { defaultAlgorithm, darkAlgorithm } = AntdTheme;

  const items: MenuProps['items'] = [
    {
      key: Theme.DARK,
      label: 'Dark',
      onClick: () => setTheme(Theme.DARK),
    },
    {
      key: Theme.LIGHT,
      label: 'Light',
      onClick: () => setTheme(Theme.LIGHT),
    },
  ];

  return (
    <ConfigProvider
      theme={{
        algorithm: theme === 'dark' ? darkAlgorithm : defaultAlgorithm,
        token: {
          colorPrimary: theme === 'dark' ? '#4D7FFF' : '#3427E7',
        },
      }}
    >
      <Dropdown
        menu={{ items, selectedKeys: [theme] }}
        trigger={['click']}
        className="theme-toggle"
      >
        {theme === Theme.LIGHT ? <Sun /> : <Moon />}
      </Dropdown>
    </ConfigProvider>
  );
};

export default ThemeToggle;
