import { createStackNavigator } from "@react-navigation/stack";
import { Chat } from "../pages/Chat";
import { ChatById } from "../pages/Chat/ChatById";

const Stack = createStackNavigator();

export function ChatStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="ChatById" component={ChatById} />
    </Stack.Navigator>
  );
}
