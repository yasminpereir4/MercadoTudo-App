import { Text, View } from "react-native";
import { Background } from "../../components/Background";

interface ChatProps {}

export const Chat: React.FC<ChatProps> = () => {
  return (
    <View className="flex-1 bg-[#15202B]">
      <Background
        children={
          <View className="justify-center items-center">
            <Text className="text-4xl italic text-white uppercase font-light">
              MENSAGENS
            </Text>
          </View>
        }
      />
    </View>
  );
};
