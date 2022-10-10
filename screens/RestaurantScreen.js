import { View, Text } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'

const RestaurantScreen = () => {
    const route =useRoute();
    const navigation = useNavigation();
    useLayoutEffect(() => {
navigation.setOptions({
  headerShown:false,
})
    }, [])
  return (
    <ScrollView>
      <View><Image source={{uri:route.params.imgUrl}}/></View>
    </ScrollView>
  )
}

export default RestaurantScreen