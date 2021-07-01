import React, {useEffect, useContext, memo} from 'react';
import {Loader} from '../components/Loader';
import {PostsContext} from '../context/posts/PostsContext';
import {PostDetail} from '../components/PostDetail';
import {useNavigation} from '@react-navigation/native';

import {Star} from '../components/Star';

interface Props {
  route: any;
}
export const PostDetailScreen = memo(({route}: Props) => {
  const Navigator = useNavigation();

  const postId: string = route?.params.post.id.toString();
  const {error, loading, post, getPostById} = useContext(PostsContext);
  useEffect(() => {
    getPostById(postId);
    Navigator.setOptions({
      headerRight: () => {
        return <Star post={route?.params?.post} />;
      },
    });
  }, []);

  return (
    <Loader error={error} loading={loading}>
      <PostDetail post={post} />
    </Loader>
  );
});
