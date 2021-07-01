import React, {useContext, useEffect, useRef} from 'react';
import {PostsContext} from '../context/posts/PostsContext';
import {PostsList} from '../components/PostsList';

export const FavPostsScreen = React.memo(() => {
  const {filterPostsByFav} = useContext(PostsContext);

  return <PostsList withDeleteButton={false} posts={filterPostsByFav()} />;
});
