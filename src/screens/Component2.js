import React from 'react';
import {
    Text,
    View,
  } from 'react-native';

import HOC from './HOC'

const Component2 = () => {
  return (
    <View>
      <Text>This is Component 2</Text>
    </View>
  );
};

export default HOC(Component2);
