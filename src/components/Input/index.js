import React from 'react';
import {
  View,
  TextInput,
  ActivityIndicator,
  TouchableOpacity,
  Image,
} from 'react-native';

import styles from './styles';
import {cancel} from '../../../assets/img';

const Input = ({
  placeholder,
  onChange,
  value,
  loading = false,
  onClearPressed = () => {},
}) => (
  <View style={styles.container}>
    <TextInput
      placeholder={placeholder}
      placeholderTextColor="#1f1f1f60"
      onChange={e => onChange(e.nativeEvent.text)}
      value={value}
      style={styles.input}
    />
    {value.length > 0 && !loading && (
      <TouchableOpacity onPress={onClearPressed} style={styles.cancelContainer}>
        <Image source={cancel} />
      </TouchableOpacity>
    )}
    {loading && (
      <View style={styles.indicatorContainer}>
        <ActivityIndicator size={20} />
      </View>
    )}
  </View>
);

export default Input;
