import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    alignSelf: 'stretch',
    height: 90,
    paddingVertical: 10,
    shadowColor: '#000',
    shadowRadius: 6,
    shadowOffset: {height: 2, width: 0},
    shadowOpacity: 0.3,
    backgroundColor: 'white',
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  topContainer: {
    flexDirection: 'row',
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 30,
  },
  title: {
    paddingHorizontal: 20,
    flex: 1,
    alignSelf: 'stretch',
    fontSize: 16,
    textAlign: 'left',
    fontWeight: '600',
    fontFamily: 'Avenir',
    color: '#1f1f1f',
  },
  ingredients: {
    fontWeight: 'bold',
    fontSize: 12,
    color: 'grey',
    marginTop: 10,
    marginBottom: 5,
  },
  ingredientsContainer: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    flexWrap: 'wrap',
    flex: 1,
  },
  ingredientContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 2,
    padding: 8,
    height: 32,
    borderRadius: 16,
    borderColor: 'red',
    borderWidth: 1,
  },
  ingredient: {
    color: 'red',
    overflow: 'scroll',
    padding: 0,
    fontSize: 12,
  },
});