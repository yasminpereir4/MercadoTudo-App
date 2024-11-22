import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  FlatList,
  ImageSourcePropType,
  ScrollView,
  Text,
  View,
} from "react-native";
import { Background } from "../../components/Background";
import { Logo } from "../../components/Logo";
import { ProductCard } from "../../components/ProductCard";

const MARGIN_CARD = 24;

interface Product {
  id: string;
  value: string;
  username: string;
  image: ImageSourcePropType;
}

interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
  const products: Product[] = [
    {
      id: "1",
      username: "Harison Rios",
      value: "250,00",
      image: require("../../assets/image1.png"),
    },
    {
      id: "2",
      username: "Wilson Nishi",
      value: "80,00",
      image: require("../../assets/image2.png"),
    },
    {
      id: "3",
      username: "Yasmin Mota",
      value: "210,00",
      image: require("../../assets/image3.png"),
    },
    {
      id: "4",
      username: "Ana Julia",
      value: "10.000,00",
      image: require("../../assets/image.png"),
    },
  ];

  const productsNextToYou: Product[] = [
    {
      id: "1",
      username: "Guilherme Pereira",
      value: "850,00",
      image: require("../../assets/image4.jpg"),
    },
    {
      id: "2",
      username: "Dayvid Silva",
      value: "300,00",
      image: require("../../assets/image5.jpg"),
    },
    {
      id: "3",
      username: "Arthur Santana",
      value: "500,00",
      image: require("../../assets/image6.jpg"),
    },
    {
      id: "4",
      username: "Kayky Menezes",
      value: "12.000,00",
      image: require("../../assets/image.png"),
    },
  ];

  return (
    <ScrollView className="flex-1 bg-[#15202B]">
      <Background
        children={
          <View className="justify-center items-center">
            <Logo />
          </View>
        }
      />
      <View>
        <Text className="text-[#FFFFFF] px-6 mt-6 font-medium text-3xl">
          Destaques
        </Text>
        <FlatList
          data={products}
          horizontal
          keyExtractor={item => item.id.toString()}
          showsHorizontalScrollIndicator={false}
          style={{ flexGrow: 0 }}
          contentContainerStyle={{
            paddingHorizontal: MARGIN_CARD,
            paddingTop: 20,
          }}
          ItemSeparatorComponent={() => <View style={{ width: MARGIN_CARD }} />}
          renderItem={({ item }) => {
            return (
              <View className="mb-4">
                <ProductCard
                  username={item.username}
                  image={item.image}
                  value={item.value}
                />
              </View>
            );
          }}
        />

        <View className="flex-row justify-between items-center px-6 mt-6">
          <Text className="text-[#FFFFFF] font-medium text-3xl">
            Perto de você
          </Text>
          <FontAwesome name="map-marker" size={24} color="#1D9BF0" />
        </View>
        <FlatList
          data={productsNextToYou}
          horizontal
          keyExtractor={item => item.id.toString()}
          showsHorizontalScrollIndicator={false}
          style={{ flexGrow: 0 }}
          contentContainerStyle={{
            paddingHorizontal: MARGIN_CARD,
            paddingTop: 20,
          }}
          ItemSeparatorComponent={() => <View style={{ width: MARGIN_CARD }} />}
          renderItem={({ item }) => {
            return (
              <View className="mb-12">
                <ProductCard
                  username={item.username}
                  image={item.image}
                  value={item.value}
                />
              </View>
            );
          }}
        />
      </View>
    </ScrollView>
  );
};
