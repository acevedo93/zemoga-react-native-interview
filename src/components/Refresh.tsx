import React, {useContext} from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors} from '../styles/colors';
import {PostsContext} from '../context/posts/PostsContext';

export const Refresh = () => {
  const {getPosts} = useContext(PostsContext);
  return (
    <TouchableOpacity onPress={getPosts}>
      <Icon name="refresh-outline" size={30} color={colors.lightShade} />
    </TouchableOpacity>
  );
};
