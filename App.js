
import  * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './Screens /Login'
import homescreen from './Screens /homescreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ThemeProvider } from "react-native-rapi-ui";


const Stack = createNativeStackNavigator();
const globalScreen={


}
export default function App() {
 return(

  <NavigationContainer>
<ThemeProvider>

<Stack.Navigator


screenOptions={globalScreen}>

<Stack.Screen     name = "Login" component={Login} />
<Stack.Screen     name = "Home" component={homescreen} />

</Stack.Navigator>



</ThemeProvider>





  </NavigationContainer>
 )
    
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
