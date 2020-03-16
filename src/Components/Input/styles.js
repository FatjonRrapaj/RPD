import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    alignSelf: 'stretch',
  },
  input: {
    backgroundColor: 'white',
    padding: 10,
    alignSelf: 'stretch',
    paddingRight: 40,
    color: '#1f1f1f',
    marginHorizontal: 10,
    marginTop: 20,
    marginBottom: 10,
    fontSize: 16,
    backgroundColor: 'white',
    height: 50,
    borderRadius: 10,
  },
  indicatorContainer: {
    position: 'absolute',
    right: 30,
    top: 10 + 20 + 5, //input padding top + margin top + 1/2 activity indicator height === centered
  },
});
