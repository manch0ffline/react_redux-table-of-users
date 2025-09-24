import { useAppSelector } from '../../app/hooks';
import { UserItem } from '../UserItem';

export const UserList: React.FC = () => {
  const { userName, name, email, phone } = useAppSelector(
    state => state.filter,
  );
  const users = useAppSelector(state => state.users);

  const filteredUsers = users.filter(user => {
    const matchUsername =
      !userName || user.username.toLowerCase().includes(userName.toLowerCase());

    const matchName =
      !name || user.name.toLowerCase().includes(name.toLowerCase());

    const matchEmail =
      !email || user.email.toLowerCase().includes(email.toLowerCase());

    const matchPhone =
      !phone || user.phone.toLowerCase().includes(phone.toLowerCase());

    return matchUsername && matchName && matchEmail && matchPhone;
  });

  return (
    <>
      <table className="table-user-list">
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map(user => (
            <UserItem key={user.id} user={user} />
          ))}
        </tbody>
      </table>
    </>
  );
};
