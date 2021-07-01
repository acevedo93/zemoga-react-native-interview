import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {IComment} from '../interfaces/comments';
import {colors} from '../styles/colors';
import {BORDER_RADIUS, globalStyles} from '../styles/globalStyles';
import {FadeInImage} from './FadeInImage';

const USER_IMG_URL =
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80';
interface Props {
  comment: IComment;
}

export const CommentCard = ({comment}: Props) => {
  return (
    <View style={[styles.commentContainer, globalStyles.verticalSpaces]}>
      <FadeInImage uri={USER_IMG_URL} style={styles.image} />
      <View style={{flex: 1}}>
        <Text style={[globalStyles.subtitle, {color: colors.primaryTint}]}>
          {comment?.name}
        </Text>
        <Text style={globalStyles.p}>{comment?.body}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  comments: {},
  container: {},
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginHorizontal: 12,
  },
  commentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,

    backgroundColor: colors.mediumTint,
    marginBottom: 10,

    borderRadius: BORDER_RADIUS,
    paddingHorizontal: 10,
    paddingVertical: 13,
  },
});
