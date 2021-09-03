// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet, Text, View, SafeAreaView, Image,
  TouchableWithoutFeedback, TouchableOpacity, TouchableHighlight, TouchableNativeFeedback,
  Button, Alert, Platform, StatusBar, Dimensions
} from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';


export default function App() {

  console.log("App Executed");  //For Debugging
  //SafeAreaView is used sio that whole text can be viewed specially in notch display phones.
  //Replace View with SafeAreaView

  // Creating a function for onPress/onClick instead of writing onPress={()=> console.log("Text is clicked")}
  const handlePress = () => console.log("Text Pressed");

  //Image returns number that is reference of the image.
  console.log(require('./assets/favicon.png'));

  //TouchableNativeFeedback works only on android and only on background not on images

  //To get Dimensions of phone you are using
  // The only drawback is it does not update on rotating the screen
  // console.log(Dimensions.get("screen"));
  console.log(useDimensions());
  console.log(useDeviceOrientation());
  const { landscape } = useDeviceOrientation();


  return (

    <SafeAreaView style={styles.container}>

      {/* <Text>Open up App.js to start working on your app!</Text> */}

      <Text numberOfLines={1} onPress={handlePress}>
        Hello reactive Native Application!!. This is a long text. This is a very long long to see what happens.
      </Text>

      <TouchableNativeFeedback onPress={() => console.log("View Background is Tapped")}>

        <View style={{
          // width: 200,
          // height: 70,
          width: '100%',
          // height: '30%',
          height: landscape ? '50%' : '30%',
          backgroundColor: 'dodgerblue'
        }}>

        </View>

      </TouchableNativeFeedback>

      <TouchableOpacity onPress={() => console.log("Image is Tapped")}>
        {/* <Image source={require('./assets/favicon.png')}></Image> */}

        {<Image
          // blurRadius={6}
          // fadeDuration={1000}  //in ms 
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300"
          }}></Image>}
      </TouchableOpacity>

      <Button
        color='orange'
        title="Click Me" onPress={() => Alert.alert("Title Block", "Message Block", [
          { text: "Button text", onPress: () => console.log("First Button is Pressed") },
          { text: "Cancel", onPress: () => console.log("Cancel Button is Pressed") }
        ])}> </Button>

      {/* This functionality doesnt work on android right now */}
      <Button
        color='red'
        title="Prompt Button" onPress={() => Alert.prompt(" Prompt Title", "Prompt Message ", text => console.log(text))}>
      </Button>



    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // backgroundColor: 'dodgerblue',
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
