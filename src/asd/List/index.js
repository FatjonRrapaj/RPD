import React from 'react';
import {FlatList} from 'react-native';

import ListItem from './ListItem';
import styles from './styles';

const RecipeList = ({recipes}) => {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      style={styles.list}
      data={recipes}
      keyExtractor={(item, index) => {
        return `${index}`;
      }}
      renderItem={({item, index}) => {
        return (
          <ListItem
            key={index}
            thumbnail={item.thumbnail}
            ingredients={item.ingredients}
            title={item.title}
          />
        );
      }}
    />
  );
};

export default RecipeList;
