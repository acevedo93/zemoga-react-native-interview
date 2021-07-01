import {IError} from '../../interfaces/error';
import {IUser} from '../../interfaces/users';
import {PostsState} from '../posts/postReducer';

export interface UsersState {
  user: IUser | null;
  loading: boolean;
  error: IError | undefined;
}

type UserActions =
  | {type: 'LOADING'}
  | {type: 'FETCH_USER'; payload: {user: IUser}}
  | {type: 'ERROR'; payload: IError};

export const usersReducer = (
  state: UsersState,
  action: UserActions,
): UsersState => {
  switch (action.type) {
    case 'FETCH_USER':
      return {
        ...state,
        loading: false,
        user: action.payload.user,
        error: {
          status: false,
          msg: '',
        },
      };
    case 'ERROR':
      return {
        ...state,
      };
    case 'LOADING':
      return {
        ...state,
        loading: true,
        error: {
          status: false,
          msg: '',
        },
      };

    default:
      return state;
  }
};
