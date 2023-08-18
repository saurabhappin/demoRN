import React from "react";
import { Text, View } from "react-native";


function OddNumber({ number, position }) {
  console.log("Odd", position, number);
  return (
    <View>
      <Text>{position})  {' '}
      <Text style= {{fontWeight: '600'}}>{number}</Text></Text>
    </View>
  );
}

export default OddNumber;