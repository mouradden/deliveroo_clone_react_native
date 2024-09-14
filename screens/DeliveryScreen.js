import { View, Text, TouchableOpacity, SafeAreaView, Image } from 'react-native'
import React from 'react'
import { XMarkIcon } from 'react-native-heroicons/outline/'
import { useNavigation } from '@react-navigation/native'
import * as Progress from 'react-native-progress'
import { useSelector } from 'react-redux'
import { selectRestaurant } from '../features/restaurantSlice'
import MapView, { Marker } from 'react-native-maps';

const DeliveryScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);

  return (
    <SafeAreaView className='flex-1 bg-[#00CCBB] '>
      <SafeAreaView className='z-50'>
        <View className="flex-row pb-24 items-center p-4">
          <TouchableOpacity 
            className='flex-1'
            onPress={() => {navigation.navigate("Basket")}}
          >
              <XMarkIcon
                  size={32}
                  color="white"          
              />
          </TouchableOpacity>
          <TouchableOpacity>
              <Text className='text-white text-lg'>Order Help</Text>
          </TouchableOpacity>

          {/* <View className='bg-white absolute top-16 items-center rounded w-96 h-28'> */}
        </View>
        <View className='bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md flex border'>
          <View className='flex-row'>
            <View>
              <Text className='text-gray-400'>Estimated arrival</Text>
              <Text className='text-4xl font-bold'>30-35 Minutes</Text>
            </View>
            <Image 
              source={{
                uri: "https://links.papareact.com/fls"
              }}
              className="h-20 w-20"
            />

          </View>
          <Progress.Bar progress={0.3} color='#00CCBB' indeterminate={true} />
          <Text className='text-gray-400 mt-4'>
            Your order at <Text className='font-bold capitalize'>{restaurant.title}</Text> is being prepared
          </Text>
        </View>
      </SafeAreaView>
      <View className='items-center flex-1 bg-white'>
        <MapView
          initialRegion={{
            latitude: 35.650519,
            longitude:  -5.305926,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          className='flex-1 h-full w-full'
          mapType="mutedStandard "
        >
          <Marker 
            coordinate={{
              latitude: 35.650519,
              longitude:  -5.305926
            }}
          />
        </MapView>
      </View>
      {/* <SafeAreaView> */}
        <View className='flex-row items-center bg-white p-4 space-x-4'>
              <Image 
                source={{
                  uri: "https://links.papareact.com/wru"
                }}
                className='w-12 h-12 bg-gray-400 rounded-full p-4'
              />
              <View className='flex-1'>
                <Text className='text-lg'>Mourad DENGUIR</Text>
                <Text className='text-gray-400'>Your order</Text>
              </View>
            <TouchableOpacity >
              <Text className='text-[#00CCBB] font-bold text-lg'>Call</Text>
            </TouchableOpacity>
        </View>
      {/* </SafeAreaView> */}
    </SafeAreaView>
  )
}

export default DeliveryScreen