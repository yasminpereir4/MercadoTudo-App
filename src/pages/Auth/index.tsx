import { useState } from "react";
import { Text, View } from "react-native";
import { Button } from "../../components/Button";
import { InputPassword } from "../../components/InputPassword";
import { InputText } from "../../components/InputText";
import { Logo } from "../../components/Logo";
import { useAuthContext } from "../../contexts/AuthContext";

export const Auth: React.FC = () => {
  const { setIsAuthenticated } = useAuthContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {
    try {
      setIsAuthenticated(true);
    } catch (error) {
      console.log("Erro ao fazer login:", error);
    }
  }

  return (
    <View className="flex-1 bg-[#1e3a8a] justify-center p-8">
      <Logo />
      <View className="mt-14 space-y-2">
        <Text className="text-white font-medium text-base mb-2">
          Seu e-mail
        </Text>
        <InputText
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          placeholder="user@email.com"
          placeholderTextColor={"#2A488C"}
        />
      </View>

      <View className="space-y-2 mt-4">
        <Text className="text-white font-medium text-base mb-2">Sua senha</Text>
        <InputPassword
          value={password}
          onChangeText={setPassword}
          placeholderTextColor={"#2A488C"}
          placeholder="*******"
        />
      </View>

      <View className="mt-14">
        <Button onPress={handleLogin} />
      </View>
    </View>
  );
};
