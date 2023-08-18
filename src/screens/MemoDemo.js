import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import EvenNumber from './EvenNumber';
import OddNumber from './OddNumber';

const MemoDemo = () => {
  const [evenNumbers, addEvenNumber] = useState([]);
  const [oddNumbers, addOddNumber] = useState([]);

  const generateEvenNumber = () => {
    const newNumber = Math.floor(Math.random() * 50) * 2;
    addEvenNumber([...evenNumbers, newNumber]);
  };

  const generateOddNumber = () => {
    let newOddNumber;

    do {
      newOddNumber = Math.floor(Math.random() * 100);
    } while (newOddNumber % 2 === 0);

    addOddNumber([...oddNumbers, newOddNumber]);
  };

  const reset = () => {
    addEvenNumber([]);
    addOddNumber([]);
  };

  return (
    <View>
      <View style={styles.evenOdd}>
        <View style={styles.even}>
          <Text style={styles.heading}>Even numbers</Text>
          {evenNumbers.map((number, index) => (
            <EvenNumber key={index} number={number} position={index + 1} />
          ))}
        </View>

        <View style={styles.odd}>
          <Text style={styles.heading}>Odd numbers</Text>
          {oddNumbers.map((number, index) => (
            <OddNumber key={index} number={number} position={index + 1} />
          ))}
        </View>
      </View>
      <TouchableOpacity onPress={generateEvenNumber} style={styles.button}>
        <Text>Generate Even Number</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={generateOddNumber} style={styles.button}>
        <Text>Generate Odd Number</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={reset} style={styles.button}>
        <Text>Reset</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  evenOdd: {
    flexDirection: 'row',
  },
  even: {
    paddingHorizontal: 10,
    flex: 1,
  },
  odd: {
    flex: 1,
  },
  heading: {
    fontSize: 26,
    fontWeight: '700',
  },
  button: {
    borderRadius: 10,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 100,
    backgroundColor: '#91C8E4',
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    textAlign: 'center',
  },
});

export default MemoDemo;
