import {IError} from '../../interfaces/error';
import {IComment} from '../../interfaces/comments';

export interface CommentsState {
  comments: IComment[] | [];
  loading: boolean;
  error: IError | undefined;
}

export type CommentsActions =
  | {type: 'LOADING'}
  | {type: 'FETCH_COMMENTS'; payload: {comments: IComment[]}}
  | {type: 'ERROR'; payload: IError};

export const commentsReducer = (
  state: CommentsState,
  action: CommentsActions,
): CommentsState => {
  switch (action.type) {
    case 'FETCH_COMMENTS':
      return {
        ...state,
        loading: false,
        comments: action.payload.comments,
        error: {
          status: false,
          msg: '',
        },
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
    case 'ERROR':
      return {
        ...state,
        loading: false,
        error: {
          status: true,
          msg: action.payload.msg,
        },
      };

    default:
      return state;
  }
};
