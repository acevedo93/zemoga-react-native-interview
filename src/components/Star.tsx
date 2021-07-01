import React, {useContext, useRef} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native';
import {PostsContext} from '../context/posts/PostsContext';
import {IPost} from '../interfaces/posts';
interface Props {
  post: IPost;
}
export const Star = ({post}: Props) => {
  const {handleFavs} = useContext(PostsContext);

  return (
    <TouchableOpacity
      activeOpacity={0.4}
      onPress={() => handleFavs(post.id.toString(), !post.isFav)}>
      <Icon
        name={post?.isFav ? 'star' : 'star-outline'}
        size={30}
        color="#e5e500"
      />
    </TouchableOpacity>
  );
};
