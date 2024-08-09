import { View, Text, Image } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { urlFor } from '../sanity';
import {StarIcon, MapPinIcon, ArrowLeftCircleIcon} from 'react-native-heroicons/outline/'

const RestaurantScreen = () => {
  const navigation = useNavigation();
  const {
    params : {
    id,
    imgUrl,
    title,
    rating,
    genre,
    address,
    short_description,
    dishes,
  },
} = useRoute();
  return (
    <View className='flex-col'>
      <Image 
        source={{ uri: urlFor(imgUrl).url() }}
        className='w-100 h-64'
      />
      <Text className='p-4 text-3xl font-bold'>{title}</Text>

      <View className='flex-row pl-4 space-x-4'>
        <View className='flex-row space-x-2 items-center'>
            <StarIcon size={22} fill="#00CCBB"/>
            <Text className='text-green-400'>{rating}</Text>
            <Text className='text-gray-400'>*</Text>
            <Text className='text-gray-400'>{genre}</Text>
        </View>
        <View className='flex-row items-center space-x-2 text-gray-500'>
            <MapPinIcon />
            <Text className='text-gray-400'>{address}</Text>
        </View>
    </View>
    <View className='p-4'>
      <Text className='text-gray-400'>{short_description}</Text>
    </View>
    <Pressable className='absolute p-2'
      onPress={() => {
        navigation.navigate("Home");
    }}
    >
      <ArrowLeftCircleIcon size={50} color='#00CCBB' fill="white"/>
    </Pressable>
    <View className=''>
    {
      dishes?.map((dish)=>(
        <Text>{dish.name}</Text>
      ))
    }
    </View>
    </View>
  )
}

export default RestaurantScreen