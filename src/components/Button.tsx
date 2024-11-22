import { Text, TouchableOpacity } from "react-native";

interface ButtonProps {
  onPress: () => void;
}

export const Button: React.FC<ButtonProps> = ({ onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="px-8 w-full py-4 items-center bg-white justify-center rounded-full"
    >
      <Text className="text-[#2A488C] font-medium text-xl">Entrar</Text>
    </TouchableOpacity>
  );
};
