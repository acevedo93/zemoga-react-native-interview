import {colors} from '../styles/colors';
import {Platform} from 'react-native';

export const screenOptions = {
  headerStyle: {
    elevation: 0,
    shadowColor: 'transparent',
    backgroundColor: colors.tertiary,
  },
  headerBackTitle: ' ',
  headerTintColor: colors.lightTint,
  headerTitleAlign: 'center',
};
export const tabBarOptions = {
  activeTintColor: colors.lightTint,
  indicatorStyle: {
    backgroundColor: colors.secondary,
  },
  cardStyle: {
    backgroundColor: 'white',
  },
  style: {
    backgroundColor: colors.tertiary,
    borderBottomWidth: 0,
    elevation: 0,
  },
};
