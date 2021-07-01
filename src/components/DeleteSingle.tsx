import React, {useContext} from 'react';
import {TouchableOpacity, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors} from '../styles/colors';
import {PostsContext} from '../context/posts/PostsContext';
interface Props {
  postId: number;
}
export const DeleteSingle = ({postId}: Props) => {
  const {deletePost} = useContext(PostsContext);
  const showAlertConfirmation = () => {
    Alert.alert('Are you sure you want to delete the post?', '', [
      {
        text: 'Cancel',
        onPress: () => {},
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => {
          deletePost(postId);
        },
      },
    ]);
  };

  return (
    <TouchableOpacity onPress={showAlertConfirmation}>
      <Icon name="remove-circle-outline" size={30} color={colors.danger} />
    </TouchableOpacity>
  );
};
