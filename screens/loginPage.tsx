import React, { useState } from "react";
import { View, Image, StyleSheet, Dimensions } from "react-native";
import { TextInput } from "react-native";
import { Button, Text } from "react-native-elements";

export default function LoginPage() {
  /*const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");


  const loginPayload = {
    username: username,
    password: password,
  };

  const response = await fetch(""),{ 
    method: "POST",
    body: JSON.stringify(loginPayload),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },

   } */

  return (
    <View>
      <View style={styles.container}>
        <Image
          style={styles.stretch}
          source={require("../assets/bubblelogo.png")}
        />
      </View>
      <View style={styles.container2}>
        <TextInput style={styles.inputstyle} placeholder="Enter Username" />
        <TextInput style={styles.inputstyle} placeholder="Enter Password" />

        <Text style={styles.textstyle}>Forgot Password?</Text>

        <Button
          title="Login"
          buttonStyle={{
            backgroundColor: "#00a680",
            borderWidth: 2,
            borderColor: "#00a680",
            borderRadius: 30,
          }}
          containerStyle={{
            width: 100,
            marginHorizontal: "60%",
            marginVertical: 10,
          }}
          titleStyle={{ fontSize: 12 }}
        />

        <Text style={styles.textstyle2}>Not a user yet? Register Now</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: "10%",
  },
  container2: {
    paddingTop: "30%",
  },
  stretch: {
    width: Dimensions.get("window").width / 2,
    height: Dimensions.get("window").height / 4,
    resizeMode: "contain",
    alignSelf: "center",
    paddingBottom: "10%",
  },
  inputstyle: {
    width: Dimensions.get("window").width / 1.3,
    height: "10%",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginHorizontal: "10%",
    marginTop: "5%",
  },
  textstyle: {
    fontSize: 14,
    color: "black",
    marginHorizontal: "10%",
    marginTop: "5%",
  },
  textstyle2: {
    fontSize: 14,
    color: "black",
    marginHorizontal: "10%",
    marginTop: "20%",
    alignSelf: "center",
  },
});
