import { View } from "react-native";

interface BackgroundProps {
  children: React.ReactNode;
}

export const Background: React.FC<BackgroundProps> = ({ children }) => {
  return (
    <View className="w-full justify-center bg-[#1e3a8a] h-[150px]">
      <View className="mt-auto mb-10">{children}</View>
      <View className="w-full justify-center bg-[#15202B] h-[20px] rounded-tl-3xl rounded-tr-3xl" />
    </View>
  );
};
