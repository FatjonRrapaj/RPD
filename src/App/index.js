import React, {useEffect, useState} from 'react';
import {SafeAreaView, StatusBar, View, Text} from 'react-native';
import DeviceInfo from 'react-native-device-info';

import {Input, List} from '../Components';
import {getRecipeList} from '../api';
import {debounce} from '../helpers';
import styles from './styles';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [recipes, setRecipes] = useState([]);
  const debouncedSearchTerm = debounce(searchTerm, 300);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    getRecipes('Bread');
  }, []);

  useEffect(() => {
    if (debouncedSearchTerm) {
      setIsSearching(true);
      getRecipes(debouncedSearchTerm);
    } else {
      setRecipes([]);
    }
  }, [debouncedSearchTerm]);

  getRecipes = searchTerm => {
    getRecipeList(searchTerm).then(data => {
      setIsSearching(false);
      setRecipes(data);
    });
  };

  MyStatusBar = () => {
    let height;
    const hasNotch = DeviceInfo.hasNotch();
    hasNotch ? (height = 44) : 20;
    height = 20;
    if (hasNotch) {
      height = 45;
    }

    return (
      <View style={{height, backgroundColor: 'red'}}>
        <StatusBar
          barStyle="light-content"
          translucent={true}
          backgroundColor={'red'}
        />
      </View>
    );
  };

  return (
    <>
      <MyStatusBar />
      <View style={styles.header}>
        <Text style={styles.title}>Recipe Puppy</Text>
        <Input
          placeholder={'Search for a recipe here, e.g Bread'}
          onChange={text => {
            setSearchTerm(text);
          }}
          value={searchTerm}
          loading={isSearching}
        />
      </View>
      <SafeAreaView style={styles.container}>
        <List recipes={recipes} />
      </SafeAreaView>
    </>
  );
};

export default App;
