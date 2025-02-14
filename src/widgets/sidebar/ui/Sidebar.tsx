import './Sidebar.scss';
import { CREATORS } from '@/widgets/sidebar/config/creators.ts';
import { CreatorProfileCard } from '@/entities/creator';
import { useMobile } from '@/features/mobile-toggle';
import clsx from 'clsx';

const Sidebar = () => {
  const { isOpen } = useMobile();

  return (
    <aside className={clsx('sidebar', isOpen && 'sidebar--open')}>
      <ul className="sidebar__list">
        {CREATORS.map((creator) => (
          <CreatorProfileCard creator={creator} />
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
