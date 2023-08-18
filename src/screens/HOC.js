import React from 'react';
import {
    Text,
    View,
  } from 'react-native';


const HOC = WrappedComponent => {
  return (props) => {
    return(
        <View>
            <Text>
                Higher Order Function
            </Text>
            <WrappedComponent />
        </View>
        
    )
  }
}
export default HOC;