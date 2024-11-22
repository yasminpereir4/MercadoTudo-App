import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

import { useState } from "react";
import {
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface ProductCardProps {
  username: string;
  value: string;
  image: ImageSourcePropType;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  username,
  image,
  value,
}) => {
  const [favoritedProduct, setFavoritedProduct] = useState(false);

  return (
    <View className="px-4 bg-[#253341] rounded-xl">
      <View>
        <View className="mt-5">
          <Image
            alt=""
            source={image}
            style={{ width: 250, height: 200, borderRadius: 10 }}
          />
          <View className="flex-row items-center mt-4">
            <Text className="text-[#FFFFFF] font-medium text-xl">
              {username}
            </Text>
          </View>
        </View>
      </View>

      <View className="flex-row justify-between mt-4 mb-4">
        <View className="flex-row items-center gap-2">
          <FontAwesome6 name="dollar" size={20} color="#FFFFFF" />
          <Text className="text-2xl text-[#FFFFFF]">{value}</Text>
        </View>
        {favoritedProduct ? (
          <TouchableOpacity
            onPress={() => setFavoritedProduct(!favoritedProduct)}
          >
            <AntDesign name="hearto" size={24} color="red" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => setFavoritedProduct(!favoritedProduct)}
          >
            <AntDesign name="heart" size={24} color="red" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
