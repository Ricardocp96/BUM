import React, { useState } from "react";
import DropDownPicker from 'react-native-dropdown-picker'
import axios from 'axios';
import Constants from 'expo-constants';
import { useHeaderHeight } from '@react-navigation/elements'
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
    const height = useHeaderHeight();
    const items = [
        { label: '成人', value: 'STD' },
        { label: '学生', value: 'TEE' },
      
       
    ];
    Logs.enableExpoCliLogging()
    async function  auth_api  (){ 
      setLoading(true);
     const sender = await axios.post('http://54.197.36.210:3000/api/user/login', {
        mobile: mobile,
        password:password

       })
       .then(() => navigation.replace("Home",{
       
        screen:"Home",
        params: {mobile}
      
   
       }))


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
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    keyboardVerticalOffset={height + 47}
    style={{ flex: 1 }}
  >
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
              登录
            </Text>
            <Section style={{ marginHorizontal: -18, marginTop: 20 }}>
            <SectionContent>
                <View>
                    <Text style={{ marginBottom: 10 }}>
选择</Text>
                    <Picker
                        items={items}
                        value={pickerValue}
                        placeholder="选择账户类型"
                        onValueChange={(val) => setPickerValue(val)}
                    />
                </View>
            </SectionContent>
        </Section>
          
            <Text>电话</Text>
            <TextInput
              containerStyle={{ marginTop: 15 }}
              placeholder="电话号码"
              value={mobile}
              autoCapitalize="none"
              autoCompleteType="off"
              autoCorrect={false}
              keyboardType="email-address"
              onChangeText={(text) => setPhone(text)}
            />

            <Text style={{ marginTop: 15 }}>密码</Text>
            <TextInput
              containerStyle={{ marginTop: 15 }}
              placeholder="请输入您的密码"
              value={password}
              autoCapitalize="none"
              autoCompleteType="off"
              autoCorrect={false}
              secureTextEntry={true}
              onChangeText={(text) => setPassword(text)}
            />
            <Button
              text={loading ? "Loading" : "继续"}
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
              <Text size="md">没有帐户？</Text>
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
                  在这里注册
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
                忘记密码
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
                  {isDarkmode ? "☀️ 轻主题" : "🌑 深色主题"}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </Layout>
    </KeyboardAvoidingView>
  );
}

