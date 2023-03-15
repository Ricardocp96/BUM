
import  * as React from 'react';
import {View, SafeAreaView, Text, StyleSheet} from 'react-native';

import dashboard from '../Components/dashboard';
import Mood from '../Components/Mood';
import { MaterialIcons } from '@expo/vector-icons'; 
import score from '../Components/score';
import profile from '../Components/profile';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
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

            if (route.name === 'score') {
              iconName = focused
                ? 'star'
                : 'star';
      
            } else if (route.name === 'Mood') {
              iconName = focused ?'body' : 'body';
            }else if (route.name === 'Analytics') {
              iconName = focused ? 'analytics-outline' : 'analytics-outline';
            }
          else if (route.name === 'Help') {
            iconName = focused ? 'ios-chatbubbles' : 'ios-chatbubbles';
          }

           
          return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'orange',
          tabBarInactiveTintColor: 'gray',
        })}
      >

        <Tab.Screen name="score"
         
         component={score}
        
        
        />
        <Tab.Screen 
        name="Mood" 
        component={Mood}
    
      
        />
     
       <Tab.Screen name="Analytics"   component={profile}
     
       
       />
       <Tab.Screen name="Help"   component={dashboard}
    
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