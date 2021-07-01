import React from 'react';
import {View, Text, StyleSheet, Animated} from 'react-native';
import {IPost} from '../interfaces/posts';
import {colors} from '../styles/colors';
import {globalStyles} from '../styles/globalStyles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {Star} from './Star';
import {Dot} from './Dot';

import {DeleteSingle} from './DeleteSingle';
import {useAnimation} from '../hooks/useAnimation';
interface Props {
  post: IPost;
}
export const PostCard = React.memo(({post}: Props) => {
  const {opacityAnimation, fadeIn} = useAnimation();
  fadeIn();

  const Navigator = useNavigation();
  return (
    <Animated.View style={{...styles.cardContainer, opacity: opacityAnimation}}>
      {!post.isSeen ? <Dot /> : <Star post={post} />}

      <View style={styles.bodyContainer}>
        <TouchableOpacity
          activeOpacity={0.4}
          onPress={() => {
            Navigator.navigate('PostDetail', {post});
          }}>
          <Text style={globalStyles.subtitle}>{post.title}</Text>
        </TouchableOpacity>
      </View>
      <DeleteSingle postId={post.id} />
    </Animated.View>
  );
});

const styles = StyleSheet.create({
  cardContainer: {
    padding: 3,
    paddingVertical: 10,
    flexDirection: 'row',
    backgroundColor: colors.light,
    borderBottomColor: colors.mediumContrast,
    alignItems: 'center',
    borderBottomWidth: 0.2,
  },
  bodyContainer: {
    flex: 1,
    marginLeft: 10,
  },
});
