import React from 'react';
import {createContext, useReducer} from 'react';

import postsApi from '../../api/postApi';
import {UsersState, usersReducer} from './usersReducer';
import {IUser} from '../../interfaces/users';

interface UserContextProps extends UsersState {
  getUserById: (id: string | undefined) => Promise<void>;
}

const usersInitialState: UsersState = {
  user: null,
  loading: false,
  error: {
    status: false,
    msg: '',
  },
};

export const UserContext = createContext({} as UserContextProps);

export const UserProvider = ({children}: any) => {
  const [state, dispatch] = useReducer(usersReducer, usersInitialState);

  const getUserById = async (id: string) => {
    dispatch({type: 'LOADING'});
    try {
      const resp = await postsApi.get<IUser>(`/users/${id}`);
      dispatch({type: 'FETCH_USER', payload: {user: resp.data}});
    } catch (error) {
      errorHandler(true, 'error en la peticion');
    }
  };

  const errorHandler = (status: boolean, msg: string = '') => {
    dispatch({
      type: 'ERROR',
      payload: {
        status,
        msg,
      },
    });
  };

  return (
    <UserContext.Provider
      value={{
        ...state,
        getUserById,
      }}>
      {children}
    </UserContext.Provider>
  );
};
