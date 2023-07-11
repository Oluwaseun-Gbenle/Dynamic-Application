import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurant } from '../slices/restaurantSlice';
import { selectBasketItems } from '../slices/basketSlice';

const BasketScreen = () => {
    const navigation = useNavigation();
    // const restaurant = useSelector(selectRestaurant);
    // const items = useSelector(selectBasketItems);
    // const dispatch = useDispatch();
    // const [groupItemsInBasket, setGroupItemsInBasket] = useState([]);

    // useMemo(() => {

    // },
    // [items])
  return (
    <View>
      <Text>BasketScreen</Text>
    </View>
  )
}

export default BasketScreen