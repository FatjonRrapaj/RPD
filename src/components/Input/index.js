import React from 'react';
import {View, TextInput, ActivityIndicator} from 'react-native';

import styles from './styles';

const Input = ({placeholder, onChange, value, loading = false}) => (
  <View style={styles.container}>
    <TextInput
      placeholder={placeholder}
      placeholderTextColor="#1f1f1f60"
      onChange={e => onChange(e.nativeEvent.text)}
      value={value}
      style={styles.input}
    />
    {loading && (
      <View style={styles.indicatorContainer}>
        <ActivityIndicator size={20} />
      </View>
    )}
  </View>
);

export default Input;
