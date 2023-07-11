import React from "react";
import { ScrollView, Text, View } from "react-native";
import { categoryList } from "../../fetched-json-files/json-categories";
import CategoryCard from "./categoryCard";

const Categories = () => {
  return (
    <ScrollView
    contentContainerStyle={{
        paddingHorizontal:17,
        paddingTop:10,
    }}
    horizontal
    showsHorizontalScrollIndicator={false}
    >
      {categoryList.map((category,idx) => (
        <CategoryCard key={idx} imgUrl={category.imgUrl} title={category.title}/>
      ))}
    </ScrollView>
  );
};

export default Categories;
