import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput } from 'react-native';
import { Card, Title } from 'react-native-paper';

import HeaderScreen from './app/screens/HeaderScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <HeaderScreen></HeaderScreen>
      <ImageBackground
        style={{ width: '100%', height: '60%' }}
        resizeMode='stretch'
        source={require('./app/assets/mycurve.png')}>
        <TextInput
          style={{ borderRadius: 30, margin: 40, backgroundColor: 'white', height: 50 }}>
        </TextInput>
      </ImageBackground>

      <View style={{ flex: 1, flexDirection: 'row', marginTop: '-35%', justifyContent: 'space-around' }}>
        <View>
          <Card style={styles.cardContainer}>
            <Card.Content>
              <Title>Angular</Title>
            </Card.Content>
          </Card>
          <Card style={styles.cardContainer}>
            <Card.Content>
              <Title>Angular Material</Title>
            </Card.Content>
          </Card>
          <Card style={styles.cardContainer}>
            <Card.Content>
              <Title>Bootstrap</Title>
            </Card.Content>
          </Card>
        </View>
        <View>
          <Card style={styles.cardContainer}>
            <Card.Content>
              <Title>Ionic</Title>
            </Card.Content>
          </Card>
          <Card style={styles.cardContainer}>
            <Card.Content>
              <Title>React JS</Title>
            </Card.Content>
          </Card>
          <Card style={styles.cardContainer}>
            <Card.Content>
              <Title>Expo</Title>
            </Card.Content>
          </Card>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  cardContainer: {
    marginBottom: 10,
    elevation: 4
  }
});
