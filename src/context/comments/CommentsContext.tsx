import React from 'react';
import {createContext, useEffect, useContext, useReducer} from 'react';

import {CommentsState, commentsReducer} from './commentsReducer';
import postsApi from '../../api/postApi';
import {IComment} from '../../interfaces/comments';

interface CommentsContextProps extends CommentsState {
  getCommentsByPostId: (id: string | undefined) => Promise<void>;
}

const commentsInitialState: CommentsState = {
  comments: [],
  loading: false,
  error: {
    status: false,
    msg: '',
  },
};

export const CommentsContext = createContext({} as CommentsContextProps);

export const CommentsProvider = ({children}: any) => {
  const [state, dispatch] = useReducer(commentsReducer, commentsInitialState);

  const getCommentsByPostId = async (id: string) => {
    dispatch({type: 'LOADING'});
    try {
      const resp = await postsApi.get<IComment[]>(`/comments/?postId=${id}`);
      dispatch({type: 'FETCH_COMMENTS', payload: {comments: resp.data}});
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
    <CommentsContext.Provider
      value={{
        getCommentsByPostId,
        ...state,
      }}>
      {children}
    </CommentsContext.Provider>
  );
};
