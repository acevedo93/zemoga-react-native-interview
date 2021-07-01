import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

export const ErrorImg = () => {
  return (
    <View>
      <Image style={styles.logo} source={require('../assets/error.png')} />
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});
