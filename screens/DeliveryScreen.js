import { View, Text, SafeAreaView, TouchableOpacity, Image } from "react-native";
import React from "react";
import { selectRestaurant } from "../slices/restaurantSlice";
import { useNavigation } from "@react-navigation/native";
import MapView from "react-native-maps";
import { XMarkIcon } from "react-native-heroicons/outline";
import * as Progress from "react-native-progress";
import { Marker } from "react-native-svg";
import { useSelector } from "react-redux";

const DeliveryScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  return (
    <View className="flex-1 bg-[#00CCBB]">
      <SafeAreaView className="z-50">
        <View className="p-5 flex-row justify-between items-center">
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <XMarkIcon color={"white"} className='font-bold' size={30} />
          </TouchableOpacity>
          <Text className="text-lg text-white font-light">Order Help</Text>
        </View>
        <View className="bg-white mx-5 my-2 p-6 shadow-md rounded-md z-50">
          <View  className="flex-row justify-between">
            <View>
              <Text className="text-lg text-gray-400">Estimated Arrival</Text>
              <Text className="text-4xl font-bold">40-45 Minutes</Text>
            </View>
            <Image
              source={{ uri: "https://links.papareact.com/fls" }}
              className="h-20 w-20"
            />
          </View>
          <Progress.Bar
            size={30}
            indeterminate={true}
            color="#00CCBB"
          ></Progress.Bar>
          <Text className="text-gray-500 mt-3">
            Your Order at {restaurant.title} is being prepared
          </Text>
        </View>
      </SafeAreaView>
      <MapView
      initialRegion={{
        latitude:restaurant.lat,
        longitude:restaurant.long,
        latitudeDelta:0.005,
        longitudeDelta:0.005,
      }}
      className="-mt-10 z-0 flex-1"
      mapType="mutedStandard"
      >
        <Marker
        coordinate={{
            latitude:restaurant.lat,
            longitude:restaurant.long,
          }}
          title={restaurant.title}
          description={restaurant.short_description}
          identifier='origin'
            pinColor="00CCBB"
        />
      </MapView>
      <SafeAreaView className="bg-white h-28 space-x-6 flex-row items-center">
      <Image
          source={{ uri: "https://links.papareact.com/wru" }}
          className="h-12 w-12 ml-5 bg-gray-300 p-4 rounded-full"
        />
        <View className="flex-1">
            <Text className="text-lg">Mike Michael</Text>
            <Text className="text-gray-400"></Text>
        </View>
        <Text className="text-[#00CCBB] text-lg mr-5 font-bold">Call</Text>
      </SafeAreaView>
    </View>
  );
};

export default DeliveryScreen;
