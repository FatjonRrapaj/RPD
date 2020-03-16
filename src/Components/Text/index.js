import React from 'react';
import {Text as Txt} from 'react-native';

import styles from './styles';

const Text = ({children, style}) => (
  <Txt style={[styles.text, style]}>{children}</Txt>
);

export default Text;
