
import  * as React from 'react';
import {View, SafeAreaView, Text, StyleSheet} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import dashboard from '../Components/dashboard';
import results from '../Components/results';
import treatment from '../Components/treatment';
import journal from '../Components/journal';
import profile from '../Components/profile';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';




const Tab = createBottomTabNavigator();

export default function App() {
  return (
   
      <View style={styles.container}>
       
        <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Journal') {
              iconName = focused
                ? 'ios-home'
                : 'ios-home-outline';
            } else if (route.name === 'Results') {
              iconName = focused ?'ios-planet' : 'ios-planet';
            }else if (route.name === 'Treatment') {
              iconName = focused ? 'ios-chatbubbles' : 'ios-chatbubbles';
            }
          else if (route.name === 'Dashboard') {
            iconName = focused ? 'ios-chatbubbles' : 'ios-chatbubbles';
          }

           
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Journal" component={journal} />
        <Tab.Screen name="Results" component={results} />
     
       <Tab.Screen name="Treatment"   component={profile}/>
       <Tab.Screen name="Dashboard"   component={dashboard}/>
      </Tab.Navigator>
      </View>
      
  
  );
}



const styles = StyleSheet.create({
  channelScreenSaveAreaView: {
    backgroundColor: 'white',
  },
  channelScreenContainer: {flexDirection: 'column', height: '100%'},
  container: {
    flex: 1,
  },
  drawerNavigator: {
    backgroundColor: '#FF5A00FF',
    width: 350,
  },
  chatContainer: {
    backgroundColor: 'white',
    flexGrow: 1,
    flexShrink: 1,
  },
  TouchableOpacity:{
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 70,
    bottom: 70,
  },

  floatingButtonStyle: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
    
  },


});