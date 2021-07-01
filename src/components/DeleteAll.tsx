import React, {useContext} from 'react';
import {View, StyleSheet, Platform, Button} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors} from '../styles/colors';
import {PostsContext} from '../context/posts/PostsContext';

export const DeleteAll = () => {
  const {deleteAll} = useContext(PostsContext);
  return (
    <View
      style={
        Platform.OS === 'ios'
          ? styles.deleteButtonIos
          : styles.deleteButtonAndroid
      }>
      {Platform.OS === 'ios' ? (
        <Button color={colors.light} title="Delete All" onPress={deleteAll} />
      ) : (
        <TouchableOpacity onPress={deleteAll}>
          <Icon name="trash-outline" size={30} color={colors.light} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  deleteButtonAndroid: {
    position: 'absolute',
    bottom: 30,
    right: 10,
    backgroundColor: colors.danger,
    borderRadius: 50,
    padding: 12,
    elevation: 10,
  },
  deleteButtonIos: {
    position: 'absolute',
    bottom: 50,
    borderRadius: 10,
    width: '100%',
    backgroundColor: colors.danger,
  },
});
