import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Text, TouchableOpacity, View } from "react-native";

interface ChatCardProps {
  username: string;
  onPress: () => void;
}

export const ChatCard: React.FC<ChatCardProps> = ({ username, onPress }) => {
  return (
    <TouchableOpacity
      className="bg-[#253341] rounded-2xl p-4"
      onPress={onPress}
    >
      <View className="flex-row items-center gap-4">
        <View className="bg-white rounded-full w-[40px] h-[40px] items-center justify-center">
          <FontAwesome5 name="user-alt" size={24} color="#253341" />
        </View>
        <View className="w-[12px] h-[12px] rounded-full bg-green-600 absolute top-8" />
        <Text className="text-[#FFFFFF] font-medium text-lg">{username}</Text>
      </View>
    </TouchableOpacity>
  );
};
