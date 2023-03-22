import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Image,
} from "react-native";

import axios from 'axios';
import {
  Layout,
  Text,
  TextInput,
  Button,
  useTheme,
  Section,
  SectionContent,
  Picker,
  themeColor,
} from "react-native-rapi-ui";

export default function ({ route }) {
  const { isDarkmode, setTheme } = useTheme();
  const [grade, setGrade] = useState("");
  const [teacher, setTeacher] = useState("");
  const [loading, setLoading] = useState(false);
  const [school, setSchool] = useState(false);
 
  const mobile = route.params.param1
  const uname= route.params.param2
  const pass = route.params.param3
  const confirm = route.params.param4
  


async function student(){

    setLoading(true);
    const sender = await axios.post('http://54.197.36.210:3000/api/user/student', {
       grade:grade,
       teacher:teacher,
       school:school,
       uname:uname,
       mobile:mobile,
       password:pass,
       confirmpassword:confirm,
       

      })
      .then(() => navigation.navigate("Login",{
      
      
     
  
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

}




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
              size="h3"
              style={{
                alignSelf: "center",
                padding: 30,
              }}
            >
              学生 🧑‍🎓




            </Text>
            <Section style={{ marginHorizontal: -18, marginTop: 20 }}>
            <SectionContent>
                <View>
                    
                    
                </View>
            </SectionContent>
        </Section>
          

            <Text>年级</Text>
            <TextInput
              containerStyle={{ marginTop: 15 }}
              placeholder="请输入你的年级"
              value={grade}
              autoCapitalize="none"
              autoCompleteType="off"
              autoCorrect={false}
              keyboardType="email-address"
              onChangeText={(text) => setGrade(text)}
            />





          
                 <Text style={{ marginTop: 15 }}>老师的名字</Text>
            <TextInput
              containerStyle={{ marginTop: 15 }}
              placeholder="请输入您的老师姓名"
              value={teacher}
              autoCapitalize="none"
              autoCompleteType="off"
              autoCorrect={false}
              secureTextEntry={true}
              onChangeText={(text) => setTeacher(text)}
            />
                   <Text style={{ marginTop: 15 }}> 学校</Text>
            <TextInput
              containerStyle={{ marginTop: 15 }}
              placeholder="请输入您的学校名称"
              value={school}
              autoCapitalize="none"
              autoCompleteType="off"
              autoCorrect={false}
              secureTextEntry={true}
              onChangeText={(text) => setSchool(text)}
            />
            <Button
              text={loading ? "Loading" : "Create an account"}
              onPress={() => {
               Register();
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
              <Text size="md">Already have an account?</Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Login");
                }}
              >
                <Text
                  size="md"
                  fontWeight="bold"
                  style={{
                    marginLeft: 5,
                  }}
                >
                  Login here
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
