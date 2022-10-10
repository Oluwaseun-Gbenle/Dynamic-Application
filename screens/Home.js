import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import {
  AdjustmentsVerticalIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/categories";
import { AllRestaurants, Discount, Featured, OfferNearYou } from "../components/featuredRow";

const Home = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="bg-white pt-5">
      {/* header */}
      <View className="flex-row item-center pb-3 mx-4 space-x-2">
        <Image
          source={{ uri: "https://links.papareact.com/wru" }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-xl">
            Current Location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>

        <UserIcon size={35} color="#00CCBB" />
      </View>
      {/* search */}
      <View className="flex-row item-center space-x-2 pb-2 mx-2 px-3">
        <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
          <MagnifyingGlassIcon color={"gray"} size="20" />
          <TextInput
            placeholder="Restaurant and Cuisine"
            keyboardType="default"
          />
        </View>
        <AdjustmentsVerticalIcon color={"#00CCBB"} />
      </View>
      {/* content */}
      <ScrollView >
        {/* categories */}
        <Categories />
        {/* featured row*/}
        <Discount
        title="Tasty Discount"
        description="paid placement for our client"
        id="featured1"
        />
        <OfferNearYou
        title="Offer Near You"
        description="paid placement for our client"
        id="featured0"
        />
         <Featured
        title="Featured"
        description="paid placement for our client"
       id="featured2"
        />
          <AllRestaurants
        title="All Restaurants"
        id="featured3"
        />
        
      </ScrollView>
    </SafeAreaView>
  );
};
export default Home;
