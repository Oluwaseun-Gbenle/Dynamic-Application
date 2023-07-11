import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { MapPinIcon, StarIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";

const RestaurantCard = (props) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      className="bg-white mr-3 shadow"
      onPress={() => {
        navigation.navigate("Restaurant", {
          id: props.id,
          title: props.title,
          imgUrl: props.imgUrl,
          genre: props.genre,
          rating: props.rating,
          address: props.address,
          short_description: props.short_description,
          dishes: props.dishes,
          long : props.long,
            lat : props.lat,
        });
      }}
    >
      <Image
        source={{
          uri: props.imgUrl,
        }}
        className="h-36 w-64 rounded-sm"
      />
      <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{props.title}</Text>
        <View className="flex-row items-center space-x-1">
          <StarIcon color={"green"} opacity={0.5} size={22} fill={"green"} />
          <Text className="text-gray-500 text-xs">
            <Text className="text-green-500">{props.rating}</Text> .{" "}
            {props.genre}
          </Text>
        </View>
        <View className="flex-row items-center space-x-1 pt-1">
          <MapPinIcon color={"gray"} opacity={0.4} size={22} />
          <Text className="text-gray-500 text-xs">
            Nearby . {props.address}{" "}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
