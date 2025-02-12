import { Avatar } from 'antd';

import './UserAvatar.scss';

const UserAvatar = () => {
  return (
    <Avatar
      className="user-avatar"
      src={
        <img src="https://avatar.iran.liara.run/public/1" alt="User Avatar" />
      }
    />
  );
};
export default UserAvatar;
