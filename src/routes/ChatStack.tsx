import { createStackNavigator } from "@react-navigation/stack";
import { Chat } from "../pages/Chat";

const Stack = createStackNavigator();

export function ChatStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Chat" component={Chat} />
    </Stack.Navigator>
  );
}
