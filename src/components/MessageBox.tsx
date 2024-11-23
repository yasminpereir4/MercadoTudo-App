import { Text, View } from "react-native";

interface MessageBoxProps {
  message: string;
}

export const MessageBox: React.FC<MessageBoxProps> = ({ message }) => {
  return (
    <View className="bg-[#172554] p-4 rounded-2xl self-start ml-auto">
      <Text className="text-[#FFFFFF] font-medium text-lg">{message}</Text>
    </View>
  );
};
