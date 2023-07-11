import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./restaurantCard";
import { discount, featured, offers, restaurants } from "../../fetched-json-files/features";
import RestaurantCard2 from "./restaurantCardTwo";

export const OfferNearYou = ({ title, description, id }) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <Text className="text-xs px-4 text-gray-500">{description}</Text>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {offers.map((offer,idx) => (
          <RestaurantCard
            key={idx}
            id={offer.id}
            imgUrl={offer.imgUrl}
            title={offer.title}
            rating={offer.rating}
            genre={offer.genre}
            address={offer.address}
            short_description={offer.short_description}
            dishes={offer.dishes}
            long={offer.long}
            lat={offer.lat}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export const Discount = ({ title, description, id }) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <Text className="text-xs px-4 text-gray-500">{description}</Text>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {discount.map((item,idx) => (
          <RestaurantCard
            key={idx}
            id={item.id}
            imgUrl={item.imgUrl}
            title={item.title}
            rating={item.rating}
            genre={item.genre}
            address={item.address}
            short_description={item.short_description}
            dishes={item.dishes}
            long={item.long}
            lat={item.lat}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export const Featured = ({ title, description, id }) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <Text className="text-xs px-4 text-gray-500">{description}</Text>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {featured.map((feature,idx) => (
          <RestaurantCard
            key={idx}
            id={feature.id}
            imgUrl={feature.imgUrl}
            title={feature.title}
            rating={feature.rating}
            genre={feature.genre}
            address={feature.address}
            short_description={feature.short_description}
            dishes={feature.dishes}
            long={feature.long}
            lat={feature.lat}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export const AllRestaurants = ({ title, id }) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
      </View>
      <ScrollView
        contentContainerStyle={{
          paddingVertical: 15,
          paddingHorizontal:15,
          paddingBottom:90,
        }}
        vertical
        showsHorizontalScrollIndicator={false}
        className=""
      >
        {restaurants.map((item,idx) => (
          <RestaurantCard2
            key={idx}
            id={item.id}
            imgUrl={item.imgUrl}
            title={item.title}
            rating={item.rating}
            genre={item.genre}
            address={item.address}
            short_description={item.short_description}
            dishes={item.dishes}
            long={item.long}
            lat={item.lat}
          />
        ))}
      </ScrollView>
    </View>
  );
};