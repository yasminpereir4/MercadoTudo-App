import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Background } from "../../components/Background";
import { ChatCard } from "../../components/ChatCard";

interface Chat {
  id: string;
  username: string;
  onPress: () => void;
}

interface ChatProps {}

export const Chat: React.FC<ChatProps> = () => {
  const { navigate } = useNavigation();

  const chats: Chat[] = [
    {
      id: "1",
      username: "Harison Rios",
      onPress: () =>
        navigate("ChatById", {
          username: "Harison Rios",
        }),
    },
    {
      id: "2",
      username: "Wilson Nishi",
      onPress: () =>
        navigate("ChatById", {
          username: "Wilson Nishi",
        }),
    },
    {
      id: "3",
      username: "Yasmin Mota",
      onPress: () =>
        navigate("ChatById", {
          username: "Yasmin Mota",
        }),
    },
    {
      id: "4",
      username: "Guilherme Pereira",
      onPress: () =>
        navigate("ChatById", {
          username: "Guilherme Pereira",
        }),
    },
    {
      id: "5",
      username: "Dayvid Silva",
      onPress: () =>
        navigate("ChatById", {
          username: "Dayvid Silva",
        }),
    },
    {
      id: "6",
      username: "Arthur Santana",
      onPress: () =>
        navigate("ChatById", {
          username: "Arthur Santana",
        }),
    },
    {
      id: "7",
      username: "Kayky Menezes",
      onPress: () =>
        navigate("ChatById", {
          username: "Kayky Menezes",
        }),
    },
  ];

  return (
    <View className="flex-1 bg-[#15202B]">
      <Background
        children={<View className="justify-center items-center"></View>}
      />
      <View className="p-4">
        <FlatList
          data={chats}
          ItemSeparatorComponent={() => <View className="my-2" />}
          renderItem={({ item }) => {
            return (
              <View>
                <ChatCard username={item.username} onPress={item.onPress} />
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};
