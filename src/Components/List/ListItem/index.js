import React, {useState, useEffect} from 'react';
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

function renderIngredients(colorfulIngredients) {
  return (
    <>
      <Text style={styles.ingredients}>Ingredients: </Text>

      <View style={styles.ingredientsContainer}>
        {colorfulIngredients.map(function renderIngredient(
          colorfulIngredient,
          index,
        ) {
          const {
            ingredient,
            borderColor,
            textColor,
            backgroundColor,
          } = colorfulIngredient;
          return (
            <View
              style={[
                styles.ingredientContainer,
                {
                  backgroundColor,
                  borderColor,
                },
              ]}
              key={index}>
              <Text style={[styles.ingredient, {color: textColor}]}>
                {ingredient}
              </Text>
            </View>
          );
        })}
      </View>
    </>
  );
}

const Recipe = ({thumbnail, title, ingredients = ''}) => {
  const [expanded, setExpanded] = useState(false);
  const [colorfulIngredients, setColorfulIngredients] = useState([]);

  const source = thumbnail === '' ? recipe : {uri: thumbnail};

  useEffect(() => {
    const colorfulIngredients = ingredients
      .split(',')
      .map(function tranformIngredient(ingredient) {
        const {color, opacityColor} = radomColorGenerator();
        return {
          ingredient,
          borderColor: color,
          textColor: color,
          backgroundColor: opacityColor,
        };
      });
    setColorfulIngredients(colorfulIngredients);
  }, [title]); // This is done to avoid calling render colors multiple times, now render colors will be called each time the item changes

  return (
    <TouchableOpacity
      onPress={() => {
        setExpanded(!expanded);
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
      {expanded && renderIngredients(colorfulIngredients)}
    </TouchableOpacity>
  );
};

export default Recipe;
