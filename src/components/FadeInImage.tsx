import React from 'react';
import {
  View,
  StyleProp,
  ImageStyle,
  Animated,
  NativeSyntheticEvent,
  ImageErrorEventData,
  ActivityIndicator,
} from 'react-native';
import {useAnimation} from '../hooks/useAnimation';
import {useState} from 'react';
import {colors} from '../styles/colors';

interface Props {
  uri: string | null;
  style?: StyleProp<ImageStyle>;
}

export const FadeInImage = ({uri, style = {}}: Props) => {
  const {opacityAnimation, fadeIn} = useAnimation();
  const [isLoading, setIsLoading] = useState(true);

  const finishLoading = () => {
    setIsLoading(false);
    fadeIn();
  };

  const onError = (err: NativeSyntheticEvent<ImageErrorEventData>) => {
    setIsLoading(false);
  };

  return (
    <View>
      {isLoading && (
        <ActivityIndicator
          style={{flex: 1, alignContent: 'center', justifyContent: 'center'}}
          color={colors.secondary}
          size={30}
        />
      )}
      <Animated.Image
        source={{uri}}
        style={{...(style as any), opacity: opacityAnimation}}
        onError={onError}
        onLoad={finishLoading}
      />
    </View>
  );
};
