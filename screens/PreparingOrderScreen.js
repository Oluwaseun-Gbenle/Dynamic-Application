import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, SafeAreaView, Image, } from 'react-native';
import * as Animatable from 'react-native-animatable';
import * as Progress from 'react-native-progress';

const PreparingOrderScreen = () => {
    const navigation = useNavigation();
    //with no API available 
    setTimeout(() => {
        navigation.navigate('DeliveryScreen')
    }, 4000);
  return (
    <SafeAreaView className='bg-[#00ccbb] flex-1 justify-center items-center'>
     <Animatable.Image
     source={{uri:'https://links.papareact.com/fls'}}
     //source={require('../assets/orderloading.gif')} 
     animation='slideInUp'
     iterationCount={1}
     className='h-96 w-96'
     />
       <Animatable.Text
     animation='slideInUp'
     iterationCount={1}
     className="text-center my-10 text-lg text-white font-bold"
     >
        Waiting for Restaurant to accept your order!
        </Animatable.Text> 

        <Progress.Circle size={60} indeterminate={true} color={'white'}/>
    </SafeAreaView>
  
  )
}

export default PreparingOrderScreen