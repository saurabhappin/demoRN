import React from 'react';
import {
    Text,
    View,
  } from 'react-native';

import HOC from './HOC'

const Component1 = () => {
  return (
    <View>
      <Text>This is Component1</Text>
    </View>
  );
};

export default HOC(Component1)