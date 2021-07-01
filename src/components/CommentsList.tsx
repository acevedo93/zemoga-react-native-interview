import React, {useContext, useEffect} from 'react';
import {FlatList} from 'react-native';
import {CommentsContext} from '../context/comments/CommentsContext';
import {Loader} from './Loader';
import {CommentCard} from './CommentCard';

interface Props {
  postId: string;
}

export const CommentsList = ({postId}: Props) => {
  const {getCommentsByPostId, loading, error, comments} =
    useContext(CommentsContext);
  useEffect(() => {
    getCommentsByPostId(postId);
  }, []);

  return (
    <Loader loading={loading} error={error}>
      <FlatList
        data={comments}
        keyExtractor={comment => comment.id.toString()}
        renderItem={({item}) => {
          return <CommentCard comment={item} />;
        }}
        showsVerticalScrollIndicator={false}
      />
    </Loader>
  );
};
