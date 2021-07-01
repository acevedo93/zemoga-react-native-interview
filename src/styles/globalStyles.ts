import {StyleSheet} from 'react-native';
import {colors} from './colors';

export const OPACITY = 0.8;
export const WEIGHT = '700';
export const BIG_TEXT = 20;
export const MEDIUM_TEXT = 16;
export const SMALL_TEXT = 12;
export const MARGIN_VERTICAL = 10;
export const BORDER_RADIUS = 10;
export const BUTTON_BORDER_RADIUS = 20;
export const globalStyles = StyleSheet.create({
  title: {
    fontSize: BIG_TEXT,

    color: colors.dark,
  },
  subtitle: {
    opacity: OPACITY,
    fontSize: MEDIUM_TEXT,

    color: colors.darkTint,
  },
  p: {
    opacity: OPACITY,
    fontSize: SMALL_TEXT,

    color: colors.darkTint,
  },
  chip: {
    fontSize: SMALL_TEXT,
    opacity: OPACITY,
    paddingTop: 5,
    color: colors.primaryTint,
  },
  btnText: {
    textAlign: 'center',
    fontSize: BIG_TEXT,
    color: colors.lightTint,
  },
  cardTitle: {
    fontSize: MEDIUM_TEXT + 2,

    color: colors.dark,
  },
  verticalSpaces: {
    marginVertical: MARGIN_VERTICAL,
  },
  imgCarrousel: {
    width: 100,
    height: 100,
    borderRadius: BORDER_RADIUS,
    marginHorizontal: 10,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
});
