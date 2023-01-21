
import  * as React from 'react';
import {View, SafeAreaView, Text, StyleSheet} from 'react-native';

import dashboard from '../Components/dashboard';
import Mood from '../Components/Mood';

import journal from '../Components/journal';
import profile from '../Components/profile';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import result from '@expo/vector-icons/result';
import { UserContext } from '../constants/UserContext';


const Tab = createBottomTabNavigator();
// add context here 


export default function App({route}) {
console.log(route.params.params.mobile)
  return (

      <View style={styles.container}>
       <UserContext.Provider value={route.params.params.mobile} >
        <Tab.Navigator 
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Journal') {
              iconName = focused
                ? 'ios-home'
                : 'ios-home-outline';
                
            } else if (route.name === 'Mood') {
              iconName = focused ?'ios-planet' : 'ios-planet';
            }else if (route.name === 'Treatment') {
              iconName = focused ? 'ios-chatbubbles' : 'ios-chatbubbles';
            }
          else if (route.name === 'Dashboard') {
            iconName = focused ? 'ios-chatbubbles' : 'ios-chatbubbles';
          }

           
          return <result name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'orange',
          tabBarInactiveTintColor: 'gray',
        })}
      >

        <Tab.Screen name="Journal"
         
         component={journal}
        
        
        />
        <Tab.Screen 
        name="Mood" 
        component={Mood}
    
      
        />
     
       <Tab.Screen name="Profile"   component={profile}
     
       
       />
       <Tab.Screen name="Dashboard"   component={dashboard}
    
       />
       
      </Tab.Navigator>
   
      </UserContext.Provider>

      </View>
      
  
  );
}



const styles = StyleSheet.create({
  channelScreenSaveAreaView: {
    backgroundColor: 'yellow',
  },
  channelScreenContainer: {flexDirection: 'column', height: '100%'},
  container: {
    flex: 1,
  },
  drawerNavigator: {
    backgroundColor: 'yellow',
    width: 350,
  },
  chatContainer: {
    backgroundColor: 'yellow',
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