import './Sidebar.scss';
import { CREATORS } from '@/widgets/sidebar/config/creators.ts';
import { CreatorProfileCard } from '@/entities/creator';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul className="sidebar__list">
        {CREATORS.map((creator) => (
          <CreatorProfileCard creator={creator} />
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
