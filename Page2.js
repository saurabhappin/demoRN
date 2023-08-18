import React, {useState} from 'react';
import {
  Button,
  SafeAreaView,
  Text,
  TextInput,
  Image,
  StyleSheet,
  View,
  Pressable,
  Alert,
  TouchableOpacity,
} from 'react-native';

const Page2 = props => {
  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.welcomeText}>
        <Text style={{color:'white', fontSize: 24, fontWeight:600,}}>Welcome to the Second Page!</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={props.handleClick}>
        <Text style={{color:'darkslategray', fontSize:20, fontWeight:600}}>Press Here</Text>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          alignContent:'space-around',
          marginHorizontal:8
        }}>
        <View style={{flex:1,backgroundColor:"red"}}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://images.pexels.com/photos/1676914/pexels-photo-1676914.jpeg?cs=srgb&dl=pexels-sergey-okhrymenko-1676914.jpg&fm=jpg',
          }}
        />
        </View>
        <View style={{backgroundColor:"green"}}>
        <Text
          style={{
            marginTop: 10,
            color: 'white',
            fontWeight: 600,
            alignItems:'flex-start',
          }}>
          This is a text that describes the image. This is a beautiful image that shows cherries covered in winter snow!
        </Text>
        </View>
       
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  welcomeText: {
    justifyContent:'center',
    alignItems:'center',
    height:50,
    color:'white',


  },
  body: {
    flex: 1,
    backgroundColor: '#38599a',
  },
  image: {
    height: 120,
    width: 210,
    alignItems: 'flex-end',
    margin: 8,
  },
  separator: {
    marginVertical: 5,
    borderColor: '#ffffff',
    borderWidth: 5,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#FFF6DC',
    opacity: '0.9',
    padding: 10,
    marginHorizontal: 10,
  },
});

export default Page2;
