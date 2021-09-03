import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={{
      backgroundColor: '#fff',
      flex: 1,  // Flex 1 can take the whole free space and is parent View.
      flexDirection: 'row',  // By default its set to column  
      // In row => x-axis is primary axis and y-axs is cross-axis

      justifyContent: 'center', //change wrt primary axis
      alignItems: 'center',     //change wrt secondary axis

      // If we enable wrapping then only align-Content will work
      flexWrap: 'wrap',
      alignContent: 'center',

    }}>
      <View style={{
        backgroundColor: 'dodgerblue',

        // flex: 2   // This flex is currently taking 50% of screen as there are 4 sections currently.
        //flexBasis: 100, // flexBasis is set acc to primary axis and is equivalent to width or height.
        //flexGrow: 1,  // flexGrow will fill the extra space acc to primary axis. It is same as flex.
        //flexShrink: 1, //flexShrik will reduce so that all elements can be visible. 
        // It is same as flex with negative sign.

        width: 100,
        height: 100,
        //alignSelf: 'flex-start'   //alignSelf is used for individual section

      }} />
      <View style={{
        backgroundColor: 'gold',
        // flex: 1  // This flex is currently taking 25% of screen as there are 4 sections currently.
        width: 100,
        height: 100,
        position: "absolute", // By default position is set to relative.
        // By relative means the positions of all the sections are fixed.
        // The top, left, bottom and changes changes on individual does not affect on any other sections.
        // By absolute means the positioning of all section is acc to the screen size.
        // The sections will automatically adjust themselves with positioning.

        top: 10,
        left: 20,
      }} />
      <View style={{
        backgroundColor: 'tomato',
        // flex: 1  // This flex is currently taking 25% of screen as there are 4 sections currently.
        width: 100,
        height: 100
      }} />
      <View style={{
        backgroundColor: 'grey',
        // flex: 1  // This flex is currently taking 25% of screen as there are 4 sections currently.
        width: 100,
        height: 100
      }} />
      <View style={{
        backgroundColor: 'lightgreen',
        // flex: 1  // This flex is currently taking 25% of screen as there are 4 sections currently.
        width: 100,
        height: 100
      }} />

    </View>
  );
}

