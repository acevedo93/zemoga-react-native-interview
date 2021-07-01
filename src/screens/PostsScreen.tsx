import React, {useContext, memo} from 'react';
import {PostsList} from '../components/PostsList';
import {Loader} from '../components/Loader';
import {PostsContext} from '../context/posts/PostsContext';

export const PostsScreen = memo(() => {
  const {posts, loading, error} = useContext(PostsContext);
  return (
    <Loader loading={loading} error={error}>
      <PostsList posts={posts} />
    </Loader>
  );
});
