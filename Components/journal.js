
import React, { useState } from "react";
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

import {


  TextInput,

} from "react-native-rapi-ui";

// see if we can get the value 


const App = () => {
  const [phone, setPhone] = useState("");




  return (
  
    <Card style={styles.purpleCard}>
    <View style={styles.cardContainer}>
   
      <Card.Content style={styles.cardContent}>
        <LovingItSvg />
      </Card.Content>

      <Card.Title
        title="Journal"
        subtitle="Write your thoughts"
        style={styles.cardTitle}
      ></Card.Title>
        <TextInput
 containerStyle={{ marginTop: 15 }}
 placeholder="write down your thoughts "
 value={phone}
 autoCapitalize="none"
 autoCompleteType="off"
 autoCorrect={false}
 keyboardType="email-address"
 onChangeText={(text) => setPhone(text)}
/>
       
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

 

  headerStyle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#312921",
    marginBottom: 10,
  },

  htmlBoxStyle: {
    height: 200,
    width: 330,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    marginBottom: 10,
  },

  richTextContainer: {
    display: "flex",
    flexDirection: "column-reverse",
    width: "100%",
    marginBottom: 10,
  },

  richTextEditorStyle: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderWidth: 1,
    borderColor: "#ccaf9b",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    fontSize: 20,
  },

  richTextToolbarStyle: {
    backgroundColor: "#c6c3b3",
    borderColor: "#c6c3b3",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderWidth: 1,
  },

  errorTextStyle: {
    color: "#FF0000",
    marginBottom: 10,
  },

  saveButtonStyle: {
    backgroundColor: "#c6c3b3",
    borderWidth: 1,
    borderColor: "#c6c3b3",
    borderRadius: 10,
    padding: 10,
    width: "25%",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    fontSize: 20,
  },

  textButtonStyle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#312921",
  }
});


export default App;




