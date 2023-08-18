import React, { memo } from "react";
import {Text,View} from "react-native";

const EvenNumber = memo(function({ number, position }) {
  console.log("Even", position, number);
  return (
    <View>
      <Text>{position})  {' '}
      <Text style= {{fontWeight: '600'}}>{number}</Text></Text>
    </View>
  );
});

export default EvenNumber;