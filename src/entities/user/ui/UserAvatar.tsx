import { Avatar } from 'antd';

import './UserAvatar.scss';

const UserAvatar = () => {
  return (
    <button className="user-avatar">
      <Avatar
        className="user-avatar__image"
        src={
          <img src="https://avatar.iran.liara.run/public/1" alt="User Avatar" />
        }
      />
    </button>
  );
};
export default UserAvatar;
