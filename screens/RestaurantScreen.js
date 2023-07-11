import { View, ScrollView, Image, Text, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  ArrowLeftIcon,
  ChevronRightIcon,
  MapPinIcon,
  QuestionMarkCircleIcon,
  StarIcon,
} from "react-native-heroicons/outline";
import DishRow from "../components/DishRow";
import BasketIcon from "../components/BasketIcon";
import { useDispatch } from "react-redux";
import { setRestaurant } from "../slices/restaurantSlice";
import { useEffect } from "react";

const RestaurantScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const dispatch = useDispatch();

  // useEffect(() => {
  // dispatch(setRestaurant[route.params])
  // }, [])
  
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <>
      <BasketIcon/>
    <ScrollView>
      <View className="relative">
        <Image
          source={{ uri: route.params.imgUrl }}
          className="h-56 w-full bg-gray-300 p-4"
        />
        <TouchableOpacity
          onPress={navigation.goBack}
          className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full"
        >
          <ArrowLeftIcon size={20} color={"#00CCBB"} />
        </TouchableOpacity>
      </View>
      <View className="bg-white">
        <View className="px-4 pt-4">
          <Text className="text-3xl font-bold">{route.params.title}</Text>
          <View className="flex-row my-1 space-x-2">
            <View className="flex-row items-center space-x-1">
              <StarIcon color="green" size="22" opacity={0.5} fill="green" />
              <Text className="text-xs text-gray-500">
                <Text className="text-green-500">{route.params.rating}</Text> .{" "}
                {route.params.genre}
              </Text>
            </View>

            <View className="flex-row items-center space-x-1">
              <MapPinIcon color="gray" size="22" opacity={0.5} />
              <Text className="text-xs text-gray-500">
                <Text className="text-gray-500">Nearby</Text> .{" "}
                {route.params.address}
              </Text>
            </View>
          </View>
          <Text className="text-gray-500 mt-2 pb-4">
            {route.params.short_description}
          </Text>
        </View>
        <TouchableOpacity className="flex-row space-x-2 items-center">
          <QuestionMarkCircleIcon color="gray" size="22" opacity={0.5} />

          <Text className="flex-1 p-4 border-y border-gray-300 text-md font-bold ">
            Have a food allergy?
          </Text>
          <ChevronRightIcon color="#00CCBB" />
        </TouchableOpacity>
      </View>
      <View>
        <Text className="px-4 pt-6 mb-3 text-xl font-bold">Menu</Text>
        {route.params.dishes.map((dish,idx) => (
          <DishRow
          key = {idx}
          id = {dish.id}
          description = {dish.description}
          name={dish.name}
          price = {dish.price}
          image = {dish.image}
          quantity={dish.quantity}
          />
        ))}
      </View>
      <View className="h-24"></View>
    </ScrollView>
    </>
  );
};

export default RestaurantScreen;
