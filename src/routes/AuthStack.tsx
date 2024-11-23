import { createStackNavigator } from "@react-navigation/stack";
import { Auth } from "../pages/Auth";
import { Home } from "../pages/Home";

const Stack = createStackNavigator();

export function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Auth" component={Auth} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
