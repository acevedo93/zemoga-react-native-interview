import React from 'react';
import {Text, FlatList} from 'react-native';
import {IPost} from '../interfaces/posts';
import {PostCard} from './PostCard';
import {DeleteAll} from './DeleteAll';

interface Props {
  posts: IPost[];
  withDeleteButton?: boolean;
}

export const PostsList = ({posts, withDeleteButton = true}: Props) => {
  return (
    <>
      <FlatList
        style={{flexGrow: 0}}
        data={posts}
        keyExtractor={post => post.id.toString()}
        renderItem={({item}) => {
          return <PostCard post={item} />;
        }}
        showsVerticalScrollIndicator={false}
      />
      {withDeleteButton && <DeleteAll />}
    </>
  );
};
