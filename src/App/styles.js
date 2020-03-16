import {StyleSheet} from 'react-native';

import {RED, WHITE} from '../constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignSelf: 'stretch',
    paddingHorizontal: 34,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: RED,
  },
  title: {
    color: WHITE,
    fontSize: 22,
    fontWeight: '700',
  },
  failedText: {
    alignSelf: 'stretch',
    textAlign: 'center',
    marginTop: 40,
    fontSize: 16,
    marginHorizontal: 40,
  },
});
