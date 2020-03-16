import React, {useEffect, useState} from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import NetInfo from '@react-native-community/netinfo';

import {Input, List, Text} from '../Components';
import {getRecipeList} from '../api';
import {debounce} from '../helpers';
import {RED} from '../constants/colors';
import styles from './styles';

const App = () => {
  const [isConnected, setIsConnected] = useState();
  const [searchTerm, setSearchTerm] = useState('');
  const [recipes, setRecipes] = useState([]);
  const debouncedSearchTerm = debounce(searchTerm, 500);
  const [isSearching, setIsSearching] = useState(false);
  const [failedToGetInfo, setFailedToGetInfo] = useState(false);

  useEffect(() => {
    const unsuscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });
    if (isConnected) {
      getRecipes('Bread');
    }
    return () => {
      unsuscribe();
    };
  }, []);

  useEffect(() => {
    if (!isConnected) {
      return;
    }
    if (debouncedSearchTerm) {
      setIsSearching(true);
      getRecipes(debouncedSearchTerm);
    } else {
      setRecipes([]);
    }
  }, [debouncedSearchTerm]);

  getRecipes = searchTerm => {
    getRecipeList(searchTerm).then(data => {
      setFailedToGetInfo(data === null);
      setIsSearching(false);
      setRecipes(data);
    });
  };

  renderList = () => {
    if (failedToGetInfo) {
      return (
        <>
          <Text style={styles.failedText}>Failed to Retrieve Recipes.</Text>
          <Text style={{...styles.failedText, marginTop: 0}}>
            Please try searching again.
          </Text>
        </>
      );
    } else {
      return <List recipes={recipes} />;
    }
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
          placeholder="Search for a recipe here, e.g Bread"
          onChange={text => {
            setSearchTerm(text);
          }}
          value={searchTerm}
          loading={isSearching}
        />
      </View>
      {!isConnected && (
        <Text style={styles.internetConnectionText}>
          No Internet Connection
        </Text>
      )}
      <SafeAreaView style={styles.container}>{renderList()}</SafeAreaView>
    </>
  );
};

export default App;
