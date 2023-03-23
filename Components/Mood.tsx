import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView,  Image,TouchableOpacity,Alert  } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { Dialog } from 'react-native-simple-dialogs';
import DialogInput from 'react-native-dialog-input';

export default function ProfileScreen() {


  return (
    
    <View   style={{position: 'absolute',}} >
       
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View >
          <Text style={styles.getStartedText}>你好👋</Text>
        

      
          

<TouchableOpacity   onPress={() => {
                //auth from server side 
                
                const createTwoButtonAlert = () =>
                
                Alert.alert('你目前感觉中立', '提交你的心情进行分析', [
                  {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                  },
                  {text: 'OK', onPress: () => console.log('OK Pressed')},
                ]);
              
                createTwoButtonAlert()
                
             }} >
             
            
          <Image 
              resizeMode="contain"
              style={{
                height: 180,
                width: 650,
              }}
              
              source={require("./verybadbear.png")}
              
            />
          </TouchableOpacity>
<TouchableOpacity    
  onPress={() => {
    //auth from server side 
    const createTwoButtonAlert = () =>
    Alert.alert('你现在感觉很好', '提交你的心情进行分析', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);

    createTwoButtonAlert()
 }} >




          <Image 
              resizeMode="contain"
              style={{
                height: 180,
                width: 240,
                transform: [{ translateY: -179 }] 
              }}
              source={require("./verygoodbear.png")}
            />
            
            </TouchableOpacity>     
           
<TouchableOpacity


onPress={() => {
  //auth from server side 
  const createTwoButtonAlert = () =>
  Alert.alert('你现在感觉很好', '提交你的心情进行分析', [
    {
      text: 'Cancel',
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel',
    },
    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ]);

  createTwoButtonAlert()
}}
>

<Image 
               
               style={{
                 height: 120,
                 width: 120,
                 transform: [{ translateY: -184 }] 
                
               }}
               source={require("./happyimg.png")}
             />   
 


</TouchableOpacity>

         
 







  <Image 
              resizeMode="contain"
              style={{
                height: 195,
                width: 750,
                transform: [{ translateY: -350 }] 
              }}
              source={require("./sadbear.png")}
             
            />
            <Text  style={{
                marginLeft:80,
                transform: [{ translateY: -550, }]
              }}   >非常好</Text>

<Text  style={{
                marginLeft:280,
                transform: [{ translateY: -570, }]
              }}   >很伤心</Text>

<Text  style={{
                marginLeft:355,
                transform: [{ translateY: -435, }]
              }}   > 伤心 </Text>

<Text  style={{
                marginLeft:35,
                transform: [{ translateY: -440, }]
              }}   >快乐 </Text>     

<Text  style={{
                marginLeft:180,
                transform: [{ translateY: -365, }]
              }}   >一般 </Text>     

<TouchableOpacity

onPress={() => {
  //auth from server side 
  const createTwoButtonAlert = () =>
  Alert.alert('你目前感觉中立', '提交你的心情进行分析', [
    {
      text: 'Cancel',
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel',
    },
    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ]);

  createTwoButtonAlert()
}}


>
<Image   

resizeMode="contain"
              style={{
                height: 119,
                width: 409,
                transform: [{ translateY: -505 }] 
               
              }}
              source={require("./neutralbear.png")}
            />

</TouchableOpacity>
 

            
        </View>
      </ScrollView>
    </View>
  );

            }


const styles = StyleSheet.create({
  container: {
   
    backgroundColor: "#fff",

  

  },
  containerimg: {
    
    height: 160,
    width: 200,
  },
  position: {
   position:'absolute',
   right:-60,
   height: 250,
   width: 200,
  
  },
  positionhappy: {
    position:'absolute',
    right:180,
    height: 220,
    width: 180,
   
   },
  arrange: {
    position:'absolute',
    right:-50,
    height: 240,
    width: 200,
   
   },
  positionp: {
    position:'absolute',
    right:25,
    height: 200,
    width: 160,
   
   },
  contentContainer: {
    position:'relative',

  },
  rowdirection: {
    flexDirection: 'row',

  },
  
  getStartedText: {
    fontSize: 24,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center",
    marginBottom: 16,
  },
  textInput: {
    Width: -25,
    height: 24,
    justifyContent: "center",
    marginBottom: 4,
  },
  button: {
    minWidth: 200,
    height: 64,
    justifyContent: "center",
    marginBottom: 16,
    marginTop: 8,
  },
  describe: {
    fontSize: 16,
    color: "rgba(96,100,109, 1)",
    marginBottom: 5,
    marginTop: 5,
  },
});
