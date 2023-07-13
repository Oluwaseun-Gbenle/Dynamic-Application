import { Image, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/outline";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket, removeFromBasket, selectBasketItems, selectBasketItemsWithId } from "../../slices/basketSlice";

const DishRow = (props) => {
    const [isPressed, setIsPressed] = useState(false);
    const items = useSelector((state)=>selectBasketItemsWithId(state,props.id))
    const dispatch = useDispatch();
    const addItemToBasket = () =>{
      dispatch(addToBasket(props))
    }
    const removeItemFromBasket = () =>{
      dispatch(removeFromBasket({id: props.id}))
    }

  return (
    <>
    <TouchableOpacity onPress={()=>setIsPressed(!isPressed)} className={`bg-white p-4 border border-gray-200 ${isPressed && "border-b-0"}`}>
      <View className="flex-row">
        <View className="flex-1 pr-2">
          <Text className="text-lg font-bold mb-1 capitalize">
            {props.name}
          </Text>
          <Text className="text-gray-400">{props.description}</Text>
          <Text className="text-gray-400 mt-2">&#x20A6;{props.price}</Text>
        </View>
        <View>
          <Image
            source={{ uri: props.image }}
            style={{ borderWidth: 1, borderColor: "#F3F3F4" }}
            className="h-20 w-20 bg-gray-300 p-4"
          />
        </View>
      </View>
    </TouchableOpacity>
    {isPressed && (
        <View className="bg-white px-4">
        <View className="flex-row items-center space-x-2 pb-3">
                <TouchableOpacity onPress={removeItemFromBasket}>
                    <MinusCircleIcon size={40}  
                     color={items.length > 0 ? "#00CCBB" :"gray"}
                     />
                </TouchableOpacity>
                <Text>{items.length }</Text>
                <TouchableOpacity onPress={addItemToBasket}>
                     <PlusCircleIcon size={40} color="#00CCBB" />
                </TouchableOpacity>
            </View>      
        </View>
    )} 
     
    </>
  );
};

export default DishRow;


