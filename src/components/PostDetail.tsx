import React, {useContext} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {IPost} from '../interfaces/posts';
import {UserDetail} from './UserDetail';
import {CommentsList} from './CommentsList';
import {globalStyles} from '../styles/globalStyles';

interface Props {
  post: IPost | null;
}
export const PostDetail = ({post}: Props) => {
  return (
    <>
      <View>
        <Text style={[globalStyles.title, globalStyles.verticalSpaces]}>
          Description
        </Text>
        <Text style={[globalStyles.p]}>{post?.body}</Text>
      </View>
      <UserDetail userId={post?.userId.toString()} />
      <Text style={[globalStyles.title, globalStyles.verticalSpaces]}>
        Comments
      </Text>
      <CommentsList postId={post?.id.toString()} />
    </>
  );
};

const styles = {};
