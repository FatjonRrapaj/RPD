import React, {useState} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';

import {arrow, recipe} from '../../../../assets/img/';
import styles from './styles';

function randomGen() {
  return Math.floor(Math.random() * 256);
}

function radomColorGenerator() {
  const c1 = randomGen();
  const c2 = randomGen();
  const c3 = randomGen();
  return {
    color: `rgb(${c1},${c2},${c3})`,
    opacityColor: `rgba(${c1},${c2},${c3},0.3)`,
  };
}

const Recipe = ({thumbnail, title, ingredients = []}) => {
  const [expanded, expand] = useState(false);
  const source = thumbnail === '' ? recipe : {uri: thumbnail};
  return (
    <TouchableOpacity
      onPress={() => {
        expand(!expanded);
      }}
      style={[styles.container, expanded ? {height: null} : {height: 80}]}>
      <View style={styles.topContainer}>
        <Image style={styles.image} source={source} />
        <Text style={styles.title}>{title}</Text>
        <Image
          style={expanded ? {transform: [{rotate: '180deg'}]} : {}}
          source={arrow}
        />
      </View>
      {expanded && (
        <>
          <Text style={styles.ingredients}>Ingredients: </Text>

          <View style={styles.ingredientsContainer}>
            {ingredients
              .split(',')
              .map(function renderIngredient(ingredient, index) {
                const {color, opacityColor} = radomColorGenerator();
                return (
                  <View
                    style={[
                      styles.ingredientContainer,
                      {
                        backgroundColor: opacityColor,
                        borderColor: color,
                      },
                    ]}
                    key={index}>
                    <Text style={[styles.ingredient, {color}]}>
                      {ingredient}
                    </Text>
                  </View>
                );
              })}
          </View>
        </>
      )}
    </TouchableOpacity>
  );
};

export default Recipe;
