import { View, Text, Image, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import { useRoute } from '@react-navigation/native'
import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { urlFor } from '../sanity';
import {StarIcon, MapPinIcon, ArrowLeftCircleIcon} from 'react-native-heroicons/outline/'
import DishRow from '../components/DishRow'
import BasketIcon from '../components/BasketIcon'
import { setRestaurant } from '../features/restaurantSlice';
import { useDispatch } from 'react-redux'

const RestaurantScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
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

useEffect(() => {
  dispatch(setRestaurant({id, imgUrl, title, rating, genre, address, short_description, dishes}));
}, []);
  return (
    <>
      <View className='flex-col'>
        <Image 
          source={{ uri: urlFor(imgUrl).url() }}
          className='w-100 h-64'
        />
        <Text className='p-4 text-3xl font-bold'>{title}</Text>

        <View className='flex-col pl-4 space-y-2'>
          <View className='flex-row space-x-2 items-center'>
              <StarIcon size={22} fill="#00CCBB"/>
              <Text className='text-green-400'>{rating}</Text>
              <Text className='text-gray-400'>*</Text>
              <Text className='text-gray-400'>{genre}</Text>
          </View>
          <View className='flex-row items-center space-x-4 text-gray-500'>
              <MapPinIcon />
              <Text className='text-gray-400'>{address}</Text>
          </View>
      </View>
      <View className='p-4'>
        <Text className='text-gray-400'>{short_description}</Text>
      </View>
      <Pressable className='absolute top-8 left-6'
        onPress={() => {
          navigation.navigate("Home");
      }}
      >
        <ArrowLeftCircleIcon size={60} color='#00CCBB' fill="white"/>
      </Pressable>
      <View className='pb-24'>
        <Text className='text-xl font-bold bg-gray-200 p-4'>Menu</Text>
        <ScrollView>
          {
            dishes?.map((dish)=>(
              <DishRow 
                key={dish._id}
                id={dish._id}
                name={dish.name}
                description={dish.short_description}
                price={dish.price}
                image={dish.image}
              />
            ))
          }
          {
            dishes?.map((dish)=>(
              <DishRow 
                key={dish._id}
                id={dish._id}
                name={dish.name}
                description={dish.short_description}
                price={dish.price}
                image={dish.image}
              />
            ))
          }
        </ScrollView>
      </View>
      </View>
  
      {/* BasketIcon */}
      <BasketIcon/>

    </>
  )
}

export default RestaurantScreen