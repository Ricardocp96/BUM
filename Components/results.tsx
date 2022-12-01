import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, Switch } from "react-native";
import { Button, TextInput } from "react-native-paper";



export default function ProfileScreen() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [previousMentalHealth, setPreviousMentalHealth] = useState("");
  const [babyDob, setBabyDOB] = useState("");
  const [birthExperience, setBirthExperience] = useState("");
  const [partner, setPartner] = useState(false);
  const [supportNetwork, setSupportNetwork] = useState(false);
  const [immediateSupport, setImmediateSupport] = useState({
    supportName: "",
    supportEmail: "",
    supportPhone: "",
  });
  const [destressors, setDestressors] = useState([]);
  const [socioeconomicStatus, setSocioeconomicStatus] = useState("");
  const [breastfeeding, setBreastfeeding] = useState(false);
  const [race, setRace] = useState("");

  function toggleSwitch(input: {
    (value: React.SetStateAction<boolean>): void;
    (arg0: (previousState: any) => boolean): void;
  }) {
    input((previousState) => !previousState);
  }
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.getStartedContainer}>
          <Text style={styles.getStartedText}>How do you feel </Text>
          <TextInput
            style={styles.textInput}
            mode="outlined"
            label="Share your mood"
            value={name}
            onChangeText={(text) => setName(text)}
          />

          
          <Text style={styles.describe}>
          Good 🙂
          </Text>
          <Switch
            onValueChange={() => toggleSwitch(setSupportNetwork)}
            value={supportNetwork}
          />

          <Text style={styles.describe}>Very Bad 😭</Text>
          <Switch
            onValueChange={() => toggleSwitch(setBreastfeeding)}
            value={breastfeeding}
          />

          <Text style={styles.describe}>Very Good 😀</Text>
          <Switch
            onValueChange={() => toggleSwitch(setPartner)}
            value={partner}
          />
 <Text style={styles.describe}>Neutral 😐</Text>
          <Switch
            onValueChange={() => toggleSwitch(setPartner)}
            value={partner}
          />
          <Text style={styles.describe}>Bad 😕 </Text>
          <Switch
            onValueChange={() => toggleSwitch(setPartner)}
            value={partner}
          />
          <Button
            style={styles.button}
            mode="contained"
            onPress={() =>
              console.log("submit", supportNetwork, breastfeeding, partner)
            }
          >
            Share my mood 
          </Button>
        </View>
      </ScrollView>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  contentContainer: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: "#fff",
    paddingBottom: 50,
  },
  getStartedContainer: {
    justifyContent: "center",
    marginHorizontal: 50,
  },
  getStartedText: {
    fontSize: 24,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center",
    marginBottom: 16,
  },
  textInput: {
    minWidth: 200,
    height: 64,
    justifyContent: "center",
    marginBottom: 8,
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