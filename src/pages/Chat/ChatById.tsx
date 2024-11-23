import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useState } from "react";
import {
  FlatList,
  KeyboardAvoidingView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Background } from "../../components/Background";
import { InputText } from "../../components/InputText";
import { MessageBox } from "../../components/MessageBox";

export interface ChatByIdParams {
  username: string;
}

interface ChatByIdProps {}

export const ChatById: React.FC<ChatByIdProps> = () => {
  const { params } = useRoute();
  const { goBack } = useNavigation();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<string[]>([]); // Estado para armazenar mensagens
  const { username } = params as ChatByIdParams;

  const handleSendMessage = () => {
    if (message.trim() === "") return; // Ignora mensagens vazias
    setMessages(prevMessages => [...prevMessages, message]); // Adiciona a nova mensagem
    setMessage(""); // Limpa o campo de texto
  };

  return (
    <View className="flex-1 bg-[#15202B]">
      <Background
        children={
          <View className="flex-row">
            <TouchableOpacity
              className="w-[45px] h-[30px] items-center justify-center ml-4 rounded-full"
              onPress={goBack}
            >
              <Ionicons name="arrow-back-outline" size={24} color="#FFFFFF" />
            </TouchableOpacity>

            <View className="flex-row items-center ml-5">
              <Text className="text-[#FFFFFF] font-medium text-3xl">
                {username}
              </Text>
            </View>
          </View>
        }
      />

      {/* Lista de mensagens */}
      <FlatList
        data={[...messages].reverse()} // Reverte as mensagens para exibir de baixo para cima
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View className="px-6 mb-4">
            <MessageBox message={item} />
          </View>
        )}
        contentContainerStyle={{
          paddingVertical: 20,
          flexGrow: 1, // Garante que o componente ocupe espaço total
          justifyContent: messages.length === 0 ? "center" : "flex-start", // Centraliza o texto quando vazio
        }}
        ListEmptyComponent={() => (
          <Text className="text-[#FFFFFF] text-center text-lg rotate-180">
            Ainda não há mensagens
          </Text>
        )}
        inverted // Inverte a ordem visual das mensagens
      />

      {/* Campo de entrada de mensagem */}
      <KeyboardAvoidingView behavior="padding">
        <View className="bg-[#253341] w-full h-[80px] rounded-tl-2xl rounded-tr-2xl p-4 gap-2 flex-row">
          <InputText
            value={message}
            onChangeText={setMessage}
            autoCapitalize="none"
            placeholder="Digite uma mensagem..."
            placeholderTextColor={"#2A488C"}
            style={{ borderRadius: 16, width: 330 }}
          />
          <TouchableOpacity
            className="bg-white rounded-2xl px-4 py-2 items-center justify-center"
            onPress={handleSendMessage}
          >
            <Feather name="send" size={24} color="#1e3a8a" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};
