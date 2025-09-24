import React from 'react';

import { User } from '../../types/User';

type Props = {
  user: User;
};

export const UserItem: React.FC<Props> = ({ user }) => {
  return (
    <tr className="user-row">
      <td className="user-row__cell">{user.name}</td>
      <td className="user-row__cell ">{user.username}</td>
      <td className="user-row__cell ">{user.email}</td>
      <td className=" user-row__cell">{user.phone}</td>
    </tr>
  );
};
