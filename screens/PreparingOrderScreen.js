import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, SafeAreaView, } from 'react-native';
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
     source={{uri:'https://cdn.dribbble.com/users/118459/screenshots/7025288/media/76c7f0aae651f067c46d5f6ab0840aee.gif'}} 
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