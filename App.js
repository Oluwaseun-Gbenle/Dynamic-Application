import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import RestaurantScreen from './screens/RestaurantScreen';
import { store } from './store';
import { Provider } from 'react-redux';
import BasketScreen from './screens/BasketScreen';
import PreparingOrderScreen from './screens/PreparingOrderScreen';
import DeliveryScreen from './screens/DeliveryScreen';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
      <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Restaurant" component={RestaurantScreen} />
      <Stack.Screen name="Basket" component={BasketScreen} options={{presentation:"modal",headerShown:false}}/>
      <Stack.Screen name="PreparingOrderScreen" component={PreparingOrderScreen} options={{presentation:"fullScreenModal",headerShown:false}}/>
      <Stack.Screen name="DeliveryScreen" component={DeliveryScreen} options={{presentation:"fullScreenModal",headerShown:false}}/>
      </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}

