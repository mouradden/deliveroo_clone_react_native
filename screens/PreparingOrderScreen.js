import { useNavigation } from '@react-navigation/native'
import { Image, SafeAreaView, Text } from 'react-native'
import React, { useEffect } from 'react'
import * as Animatable from 'react-native-animatable'
import * as Progress from 'react-native-progress'


const PreparingOrderScreen = () => {
  const navigation = useNavigation();

  useEffect(()=>{
    setTimeout(()=>{
      navigation.navigate("Delivery");
    }, 4000);
  }, []);
  return (
    <SafeAreaView className='bg-[#00CCBB] flex-1 justify-center items-center'>
      <Animatable.Image 
        className='h-96 w-96'
        source={require("../assets/images/loading.webp")}
        animation="slideInUp"
      />
      <Animatable.Text
        animation="slideInUp"
        className='text-lg text-white font-bold my-10 text-center'
      >
        Waiting for the restaurant to accept your order!
      </Animatable.Text>

      <Progress.Circle size={30} indeterminate={true} />
    </SafeAreaView>
  )
}

export default PreparingOrderScreen
