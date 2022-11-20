
import React from 'react';
import Colors from '../constants/Colors'
import { Button, Card, Title, Paragraph } from 'react-native-paper';
import CardColors from '../constants/CardColors';
import Constants from 'expo-constants';
import LovingItSvg from '../assets/undraw_svgs/LovingItSvg';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Switch,
  SafeAreaView,
} from 'react-native';

const App = () => {
  return (
    <Card style={styles.purpleCard}>
    <View style={styles.cardContainer}>
      <Card.Content style={styles.cardContent}>
        <LovingItSvg />
      </Card.Content>
      <Card.Title
        title="Affirmation"
        subtitle="Some text here"
        style={styles.cardTitle}
      ></Card.Title>
    </View>
  </Card>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: Colors.light.background,
    marginTop: Constants.statusBarHeight,
  },
  scrollView: {
    marginHorizontal: 20,
  },
  contentContainer: {
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: Colors.light.background,
  },
  getStartedContainer: {
    justifyContent: 'center',
    marginHorizontal: 30,
  },
  getStartedText: {
    fontSize: 24,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
    marginBottom: 16,
  },
  touchable: {
    paddingTop: 30,
  },
  cardContainer: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  cardTitle: {
    width: '60%',
    height: 100,
    padding: 10,
  },
  cardContent: {
    backgroundColor: 'transparent',
    width: '39%',
    height: 100,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  purpleCard: {
    backgroundColor: CardColors.purple,
    width: '100%', // Required to make it work on Android
    height: 100, //Required to make it work on Android
    paddingLeft: 15,
    paddingRight: 15,
  },
  pinkCard: {
    backgroundColor: CardColors.pink,
    width: '100%',
    height: 100,
    paddingLeft: 15,
    paddingRight: 15,
  },
  orangeCard: {
    backgroundColor: CardColors.orange,
    width: '100%',
    height: 100,
    paddingLeft: 15,
    paddingRight: 15,
  },
  greenCard: {
    backgroundColor: CardColors.green,
    width: '100%',
    height: 100,
    paddingLeft: 15,
    paddingRight: 15,
  },
  yellowCard: {
    backgroundColor: CardColors.yellow,
    width: '100%',
    height: 100,
    paddingLeft: 15,
    paddingRight: 15,
  },
  blueCard: {
    backgroundColor: CardColors.blue,
    width: '100%',
    height: 100,
    paddingLeft: 15,
    paddingRight: 15,
  },
});


export default App;




