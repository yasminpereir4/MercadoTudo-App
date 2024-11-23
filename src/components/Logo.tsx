import { Text, View } from "react-native";

interface LogoProps {}

export const Logo: React.FC<LogoProps> = () => {
  return (
    <View className="flex-row items-center justify-center">
      <Text className="text-4xl italic text-white uppercase font-light">
        Mercado
      </Text>
      <Text className="text-4xl italic text-white uppercase font-extrabold">
        Tudo
      </Text>
    </View>
  );
};
