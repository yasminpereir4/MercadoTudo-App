import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "./global.css";
import { AuthContextProvider } from "./src/contexts/AuthContext";
import { Routes } from "./src/routes";

export default function App() {
  return (
    <GestureHandlerRootView className="flex-1">
      <StatusBar
        translucent
        barStyle="dark-content"
        backgroundColor="transparent"
      />
      <NavigationContainer>
        <AuthContextProvider>
          <Routes />
        </AuthContextProvider>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
