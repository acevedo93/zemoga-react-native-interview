import React from 'react';
import {createContext, useEffect, useReducer} from 'react';
import {IPost} from '../../interfaces/posts';
import {PostsState, postReducer} from './postReducer';
import postsApi from '../../api/postApi';

interface PostContextProps extends PostsState {
  getPosts: () => Promise<void>;
  getPostById: (postId: string) => Promise<void>;
  handleFavs: (postId: string, newState: boolean) => void;
  filterPostsByFav: () => IPost[];
  deleteAll: () => void;
  deletePost: (postId: number) => void;
}

const postsInitialState: PostsState = {
  posts: [],
  post: null,
  loading: false,
  error: {
    status: false,
    msg: '',
  },
};

export const PostsContext = createContext({} as PostContextProps);

export const PostProvider = ({children}: any) => {
  const [state, dispatch] = useReducer(postReducer, postsInitialState);
  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    dispatch({type: 'LOADING'});
    try {
      const resp = await postsApi.get<IPost[]>('/posts');
      dispatch({
        type: 'FETCH_POSTS',
        payload: {posts: postModifications(resp.data)},
      });
    } catch (error) {
      errorHandler(true, 'error en la peticion');
    }
  };

  const getPostById = async (postId: string) => {
    dispatch({type: 'LOADING'});
    try {
      let resp = await postsApi.get<IPost>(`/posts/${postId}`);
      postSeen(postId);
      dispatch({type: 'FETCH_POST', payload: {post: resp.data}});
    } catch (error) {
      errorHandler(true, 'error en la peticion');
    }
  };
  const postSeen = (postId: string) => {
    const actualPosts = [...state.posts];
    const seenPosts = actualPosts.map(post => {
      if (post.id.toString() === postId) {
        post.isSeen = true;
      }
      return post;
    });
    dispatch({type: 'SEEN_POST', payload: {posts: seenPosts}});
  };

  const postModifications = (posts: IPost[]): IPost[] => {
    return posts.map((post, index) => {
      post.isSeen = index > 20;
      return post;
    });
  };

  const handleFavs = (postId: string, newState: boolean) => {
    const actualPosts = [...state.posts];
    const favPosts = actualPosts.map(post => {
      if (post.id.toString() === postId) {
        post.isFav = newState;
      }
      return post;
    });
    dispatch({type: 'FAV_POSTS', payload: {posts: favPosts}});
  };

  const filterPostsByFav = () => {
    const actualPosts = [...state.posts];
    return actualPosts.filter(post => post.isFav);
  };

  const deleteAll = () => {
    dispatch({
      type: 'DELETE_ALL_POSTS',
      payload: {warning: 'Refresh data'},
    });
  };

  const deletePost = (postId: number) => {
    const actualPosts = [...state.posts];
    const newPosts = actualPosts.filter(post => post.id != postId);
    dispatch({
      type: 'DELETE_POST',
      payload: {posts: newPosts},
    });
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
    <PostsContext.Provider
      value={{
        getPosts,
        getPostById,
        handleFavs,
        filterPostsByFav,
        deleteAll,
        deletePost,
        ...state,
      }}>
      {children}
    </PostsContext.Provider>
  );
};
