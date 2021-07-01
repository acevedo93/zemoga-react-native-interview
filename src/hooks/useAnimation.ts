import {useRef} from 'react';
import {Animated, Easing} from 'react-native';

export const useAnimation = () => {
  const opacityAnimation = useRef(new Animated.Value(0.0)).current;
  const topAnimation = useRef(new Animated.Value(-1000)).current;

  const fadeIn = () => {
    Animated.timing(opacityAnimation, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();

    Animated.timing(topAnimation, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
      easing: Easing.bounce,
    }).start();
  };
  const fadeOut = () => {
    Animated.timing(opacityAnimation, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {});
    Animated.timing(topAnimation, {
      toValue: -400,
      duration: 0,
      useNativeDriver: true,
    }).start();
  };

  return {
    opacityAnimation,
    topAnimation,
    fadeIn,
    fadeOut,
  };
};
