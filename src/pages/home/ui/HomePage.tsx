import { useTheme } from '@/entities/theme';

const HomePage = () => {
  const { toggleTheme } = useTheme();

  return (
    <div>
      Home page
      <button onClick={toggleTheme}>theme</button>
    </div>
  );
};
export default HomePage;
