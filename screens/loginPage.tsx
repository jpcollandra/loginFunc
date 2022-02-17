import React from "react";
import { View, Image, StyleSheet, Dimensions } from "react-native";
import { Input } from "react-native-elements";
import { Button,Text } from "react-native-elements";

export default function LoginPage() {
  return (
    <View>
      <View style={styles.container}>
        <Image
          style={styles.stretch}
          source={require("../assets/bubblelogo.png")}
        />
      </View>
      <View >
        <Input style={styles.inputstyle} placeholder="Enter Username"/>
        <Input style={styles.inputstyle} placeholder="Enter Password"/>
       
        <Text style={styles.textstyle}>Forgot Password?</Text>
        <Button style={styles.buttonstyle} title="Login"/>
        <Text style={styles.textstyle2}>Not a user yet? Register Now</Text>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: "10%",
  },
  stretch: {
    width: Dimensions.get("window").width/2,
    height: Dimensions.get("window").height/4,
    resizeMode: "contain",
    alignSelf: "center"
  },
  inputstyle:{
    width: 50,
    height: 50,
    alignSelf: "center",
    },
  buttonstyle:{
    width: 100,
    height: 50,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 100,
    fontWeight: 'bold',
    marginHorizontal: "60%",
  },
    textstyle:{
    fontSize: 14,
    color: 'black',
    marginHorizontal: "10%",
    },
    textstyle2:{
        fontSize: 14,
        color: 'black',
        marginHorizontal: "10%",
        marginTop: "20%",
        alignSelf: "center"
        }
});
