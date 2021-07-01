import React from 'react';
import {
  ActivityIndicator,
  View,
  StyleSheet,
  Text,
  Dimensions,
} from 'react-native';
import {colors} from '../styles/colors';
import {IError} from '../interfaces/error';
import {ErrorImg} from './ErrorImg';

interface Props {
  children: JSX.Element | JSX.Element[];
  loading: boolean;
  error: IError | undefined;
  flex?: boolean;
}
export const Loader = ({children, loading, error, flex = true}: Props) => {
  const renderError = () => (
    <View style={styles.errorMsgContainer}>
      <ErrorImg />
      <Text style={styles.errorMsg}>{error?.msg}</Text>
    </View>
  );
  const renderLoader = () => (
    <ActivityIndicator
      style={{flex: 1}}
      size="large"
      color={colors.secondary}
    />
  );
  return (
    <View style={flex && styles.container}>
      {loading && renderLoader()}
      {!loading && error?.status && renderError()}
      {!loading && !error?.status && children}
    </View>
  );
};

const styles = StyleSheet.create({
  errorMsgContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorMsg: {
    fontSize: 20,
    paddingHorizontal: 50,
    color: colors.primary,
  },
  container: {
    flex: 1,
    marginHorizontal: 10,
  },
});
