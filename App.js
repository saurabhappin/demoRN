/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState, useRef} from 'react';
import Page2 from './Page2';
import Component1 from './src/screens/Component1';
import Component2 from './src/screens/Component2';
import HOC from './src/screens/HOC';

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
  FlatList,
  TouchableOpacity,
  Animated,
  Dimensions,
  
} from 'react-native';
import MemoDemo from './src/screens/MemoDemo';
const{height,width} = Dimensions.get('window')


const greet = () => {
const[users, setUsers] = useState([]); 
const[showData, setShowData] = useState(false);
const[dataShown, setDataShown] = useState(false);
const[showBackToTop, setShowBackToTop] = useState(false);
const[showBackToBottom,setShowBackToBottom] = useState(false);
const[showMemoization, setShowMemoization] = useState(false);
const[showHOC, setShowHOC] = useState(false);
const listRef = useRef();
async function fetchUsers(){
  //using try catch blocks for error handling.  
  try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users'); //using fetch to get api, fetch returns promise
        const jsonData = await response.json();    //converting to json data format
        setUsers((users) => users=jsonData)
    }
    catch(error){
        console.log("Error in fetching data "+error)
    }
}    

const pressed = () => {
    setShowData(!showData)
    if(showData){
      fetchUsers();
    }
    setDataShown(!dataShown)
}
const pressed1 = () => {
  setShowHOC(!showHOC);
}

const onPressTop = () => {
  listRef.current.scrollToIndex({index: 0});
};

const onPressBottom = () => {
  listRef.current.scrollToEnd();
};


const handleScroll = event => {
  const {contentOffset, contentSize, layoutMeasurement} = event.nativeEvent;
  console.log(event.nativeEvent)
  console.log(height,width);
  if (contentOffset.y <= 5) {
    setShowBackToBottom(true);
  } else if (contentOffset.y >= contentSize.height-layoutMeasurement.height-30) {
    // console.log(contentSize.height-layoutMeasurement.height-10)
    setShowBackToTop(true);
  } else {
    setShowBackToBottom(false);
    setShowBackToTop(false);
  }
};
const text = showBackToTop ? 'Go To Top' : 'Skip To Bottom';

const memoPress = () => {
  setShowMemoization(!showMemoization);
}

  return (
    <SafeAreaView style={styles.body}>
      <TouchableOpacity  onPress={pressed}
      style={styles.button}>
        <Text>{ dataShown ? 'Hide data' : 'Show data'}</Text>
      </TouchableOpacity>
      <TouchableOpacity
      onPress={pressed1}
      style={styles.button}>
       <Text>{ dataShown ? 'Hide HOC' : 'Show HOC'}</Text>
      </TouchableOpacity>
      {showHOC && <Component1 />}

      {showData &&  <FlatList
            ref={listRef}
            data={users}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <View style={styles.userContainer}>
                <Text style={styles.userName}>Name: {item.name}</Text>
                <Text style={styles.userName}>--------</Text>
                <Text style={styles.userEmail}>Email: {item.email}</Text>
                <Text style={styles.userEmail}>Phone: {item.phone}</Text>
                <Text style={styles.userEmail}>
                  Address: {item.address.city}
                </Text>
                <Text style={styles.userEmail}>Website: {item.website}</Text>
                <Text style={styles.userName}>--------</Text>
              </View>
            )}
            onScroll={handleScroll}
          /> }
          
          {showData && (showBackToTop || showBackToBottom) && (
            <TouchableOpacity
              style={styles.button}
              onPress={
                showBackToTop ? onPressTop : onPressBottom
              }>
              <Text>{text}</Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity
          onPress={memoPress}
          style = {styles.button}>
            <Text>{ showMemoization ? 'Hide Memoization' : 'Show Memoization'}</Text>
          </TouchableOpacity>
          {showMemoization && <MemoDemo />}
          
    </SafeAreaView>
  );
};




const styles = StyleSheet.create({
  body: {
    flex:1,
    backgroundColor: '#dde6ed'
  },
  image: {
    height: 180,
    width: 410,
    alignSelf: 'center',
    margin: 8,
  },
  separator: {
    marginVertical: 5,
    borderColor: '#ffffff',
    borderWidth: 5,
  },
  userContainer: {
    marginVertical: 10,
    marginHorizontal: 12,
    padding: 11,
    backgroundColor: 'white',
    borderRadius: 8,
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
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  userEmail: {
    fontSize: 14,
    color: '#666',
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 50,
    marginHorizontal: '30%',
    height: 48,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems:'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    textAlign: 'center',
  }
});

export default greet;
