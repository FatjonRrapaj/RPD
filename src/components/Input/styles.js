import {StyleSheet} from 'react-native';

import {DARK_TEXT, WHITE} from '../../constants/colors';

export default StyleSheet.create({
  container: {
    alignSelf: 'stretch',
  },
  input: {
    backgroundColor: WHITE,
    padding: 10,
    alignSelf: 'stretch',
    paddingRight: 40,
    color: DARK_TEXT,
    marginHorizontal: 10,
    marginTop: 20,
    marginBottom: 10,
    fontSize: 16,
    backgroundColor: WHITE,
    height: 50,
    borderRadius: 10,
  },
  indicatorContainer: {
    position: 'absolute',
    right: 30,
    top: 10 + 20 + 5, //input padding top + margin top + 1/2 activity indicator height === centered
  },
  cancelContainer: {
    padding: 4,
    position: 'absolute',
    right: 30,
    top: 10 + 20 + 4, //input padding top + margin top + 1/2 image size
  },
});
