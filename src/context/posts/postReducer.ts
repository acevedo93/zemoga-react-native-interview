import {IError} from '../../interfaces/error';
import {IPost} from '../../interfaces/posts';

export interface PostsState {
  posts: IPost[] | [];
  favotitePosts: IPost[] | [];
  loading: boolean;
  error: IError | undefined;
  post: IPost | null;
}

type PostsActions =
  | {type: 'LOADING'}
  | {type: 'DELETE_ALL_POSTS'; payload: {warning: string}}
  | {type: 'DELETE_POST'; payload: {posts: IPost[]}}
  | {type: 'FETCH_POSTS'; payload: {posts: IPost[]}}
  | {type: 'FETCH_POST'; payload: {post: IPost}}
  | {type: 'FAV_POSTS'; payload: {posts: IPost[]}}
  | {type: 'SEEN_POST'; payload: {posts: IPost[]}}
  | {type: 'ERROR'; payload: IError};

export const postReducer = (
  state: PostsState,
  action: PostsActions,
): PostsState => {
  switch (action.type) {
    case 'FETCH_POSTS':
      return {
        ...state,
        loading: false,
        posts: action.payload.posts,
        error: {
          status: false,
          msg: '',
        },
      };
    case 'FETCH_POST':
      return {
        ...state,
        loading: false,
        post: action.payload.post,
        error: {
          status: false,
          msg: '',
        },
      };
    case 'SEEN_POST':
      return {
        ...state,
        posts: action.payload.posts,
      };

    case 'FAV_POSTS':
      return {
        ...state,
        posts: action.payload.posts,
        loading: false,
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
    case 'DELETE_ALL_POSTS':
      return {
        ...state,
        error: {
          status: true,
          msg: action.payload.warning,
        },
        posts: [],
        post: null,
      };
    case 'DELETE_POST':
      return {
        ...state,

        posts: action.payload.posts,
        post: null,
      };

    default:
      return state;
  }
};
