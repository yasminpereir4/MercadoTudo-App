import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View } from "react-native";
import { useAuthContext } from "../contexts/AuthContext";
import { AuthStack } from "./AuthStack";
import { ChatStack } from "./ChatStack";
import { HomeStack } from "./HomeStack";

const Tab = createBottomTabNavigator();

export const Routes: React.FC = () => {
  const { isAuthenticated } = useAuthContext();

  if (!isAuthenticated) {
    return <AuthStack />;
  }

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 60,
          backgroundColor: "#253341",
        },
        tabBarLabelStyle: {
          display: "none",
        },
      }}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: () => (
            <View className="mt-2">
              <Ionicons name="cart" size={25} color={"white"} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="ChatStack"
        component={ChatStack}
        options={{
          tabBarLabel: "Chat",
          tabBarIcon: () => (
            <View className="mt-2">
              <Ionicons name="chatbubble-sharp" size={22} color="white" />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
