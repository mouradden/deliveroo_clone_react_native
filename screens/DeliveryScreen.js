import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { XMarkIcon } from 'react-native-heroicons/outline/'
const DeliveryScreen = () => {
  return (
    <View>
      <View className="p-4 flex-row items-center bg-[#00CCBB]">
        <TouchableOpacity className='flex-1'>
            <XMarkIcon
                size={32}
                color="white"          
            />
        </TouchableOpacity>
        <TouchableOpacity>
            <Text className='text-white text-lg'>Order Help</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default DeliveryScreen