import React, { useState } from "react";
import DropDownPicker from 'react-native-dropdown-picker'
import axios from 'axios';
import Constants from 'expo-constants';
import { Logs } from 'expo'
import {
    ScrollView,
    TouchableOpacity,
    View,
    KeyboardAvoidingView,
    Image,
    StyleSheet,
  } from "react-native";

  import {
    Layout,
    Text,
    TextInput,
    Button,
    useTheme,
    themeColor,
    Picker,
    Section,
    SectionContent,
  } from "react-native-rapi-ui";

  
  export default function ({ navigation }) {
    const { isDarkmode, setTheme } = useTheme();
    const [mobile, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [pickerValue, setPickerValue] = React.useState(null);
    const items = [
        { label: 'Adult', value: 'STD' },
        { label: 'Student', value: 'TEE' },
       
    ];
    Logs.enableExpoCliLogging()
    async function  auth_api  (){ 
      setLoading(true);
     const sender = await axios.post('http://54.197.36.210:3000/api/user/login', {
        mobile: mobile,
        password:password

       })
       .then(() =>navigation.reset({
        index: 0,
        paramKey: mobile,
        routes: [{ name: 'Home' }],
       }))
       //If response is in json then in success
       .then(() => {
         //Success
         
         if(!sender) 
         setLoading(false);
        
       })
       //If response is not in json then in error
       .catch((error) => {
         //Error
         //const message= "something went wrong try again"
         setLoading(false);
         alert(JSON.stringify("something went wrong try again"));
    
       });
   };
      
      
    
  return (
    <KeyboardAvoidingView behavior="height" enabled style={{ flex: 1 }}>
      <Layout>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
          }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: isDarkmode ? "#17171E" : themeColor.white100,
            }}
          >
            
            <Image
              resizeMode="contain"
              style={{
                height: 220,
                width: 220,
              }}
              source={require("./join.png")}
            />
          </View>
          <View
            style={{
              flex: 3,
              paddingHorizontal: 20,
              paddingBottom: 20,
              backgroundColor: isDarkmode ? themeColor.dark : themeColor.white,
            }}
          >
            <Text
              fontWeight="bold"
              style={{
                alignSelf: "center",
                padding: 30,
              }}
              size="h3"
            >
              Login
            </Text>
            <Section style={{ marginHorizontal: -18, marginTop: 20 }}>
            <SectionContent>
                <View>
                    <Text style={{ marginBottom: 10 }}>Picker</Text>
                    <Picker
                        items={items}
                        value={pickerValue}
                        placeholder="choose Account type"
                        onValueChange={(val) => setPickerValue(val)}
                    />
                </View>
            </SectionContent>
        </Section>
          
            <Text>Phone number</Text>
            <TextInput
              containerStyle={{ marginTop: 15 }}
              placeholder="Phone number "
              value={mobile}
              autoCapitalize="none"
              autoCompleteType="off"
              autoCorrect={false}
              keyboardType="email-address"
              onChangeText={(text) => setPhone(text)}
            />

            <Text style={{ marginTop: 15 }}>Password</Text>
            <TextInput
              containerStyle={{ marginTop: 15 }}
              placeholder="Enter your password"
              value={password}
              autoCapitalize="none"
              autoCompleteType="off"
              autoCorrect={false}
              secureTextEntry={true}
              onChangeText={(text) => setPassword(text)}
            />
            <Button
              text={loading ? "Loading" : "Continue"}
              onPress={() => {
                 //auth from server side 
                
                auth_api();
                
               


              }}
              style={{
                marginTop: 20,
              }}
              disabled={loading}
            />

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 15,
                justifyContent: "center",
              }}
            >
              <Text size="md">Don't have an account?</Text>
              <TouchableOpacity
                onPress={() => {
                

                  navigation.navigate("Register");
                }}
              >
                <Text
                  size="md"
                  fontWeight="bold"
                  style={{
                    marginLeft: 5,
                  }}
                >
                  Register here
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 10,
                justifyContent: "center",
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("ForgetPassword");
                }}
              >
                <Text size="md" fontWeight="bold">
                  Forget password
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 30,
                justifyContent: "center",
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  isDarkmode ? setTheme("light") : setTheme("dark");
                }}
              >
                <Text
                  size="md"
                  fontWeight="bold"
                  style={{
                    marginLeft: 5,
                  }}
                >
                  {isDarkmode ? "☀️ light theme" : "🌑 dark theme"}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </Layout>
    </KeyboardAvoidingView>
  );
}

