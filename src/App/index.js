import React, {useEffect, useState} from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import DeviceInfo from 'react-native-device-info';

import {Input, List, Text} from '../Components';
import {getRecipeList} from '../api';
import {debounce} from '../helpers';
import {RED} from '../constants/colors';
import styles from './styles';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [recipes, setRecipes] = useState([]);
  const debouncedSearchTerm = debounce(searchTerm, 500);
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

  RedStatusBar = () => {
    let height = 20;
    const hasNotch = DeviceInfo.hasNotch();
    if (hasNotch) {
      height = 45;
    }

    return (
      <View style={{height, backgroundColor: RED}}>
        <StatusBar
          barStyle="light-content"
          translucent={true}
          backgroundColor={RED}
        />
      </View>
    );
  };

  return (
    <>
      <RedStatusBar />
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
