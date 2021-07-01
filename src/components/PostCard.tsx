import React from 'react';
import {View, Text, StyleSheet, useColorScheme, useContext} from 'react-native';
import {IPost} from '../interfaces/posts';
import {colors} from '../styles/colors';
import {globalStyles} from '../styles/globalStyles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {Star} from './Star';
import {Dot} from './Dot';
import {PostsContext} from '../context/posts/PostsContext';
import {DeleteSingle} from './DeleteSingle';
interface Props {
  post: IPost;
}
export const PostCard = ({post}: Props) => {
  const Navigator = useNavigation();
  return (
    <View style={styles.cardContainer}>
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
    </View>
  );
};

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
