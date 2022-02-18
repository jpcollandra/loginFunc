import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemeProvider } from "react-native-elements";
import LoginPage from "./screens/loginPage";

export default function App() {
  return (
    <View>
      <SafeAreaView>
        <ThemeProvider>
          <LoginPage/>
        </ThemeProvider>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
