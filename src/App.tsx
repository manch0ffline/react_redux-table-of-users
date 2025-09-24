import React, { useEffect, useState } from 'react';

import './App.scss';
import { Loader } from './components/Loader';
import { useAppDispatch } from './app/hooks';
import { getUsers } from './api';
import { usersSlice } from './features/users';
import { UserList, UsersFilter } from './components';

export const App: React.FC = () => {
  const [loader, setLoader] = useState(true);
  const dispatch = useAppDispatch();

  useEffect(() => {
    getUsers()
      .then(elements => {
        dispatch(usersSlice.actions.updateUsers(elements));
      })
      .finally(() => {
        setLoader(false);
      });
  }, []);

  return (
    <div className="app">
      <div className="app__container">
        <div className="app__block">
          <h2 className="app__title">Search params:</h2>
          <UsersFilter />
        </div>
        <div className="app__block">
          <h2 className="app__title">Found users:</h2>
          {loader ? <Loader /> : <UserList />}
        </div>
      </div>
    </div>
  );
};
