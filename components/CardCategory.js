import { View, Text, Image, TouchableOpacity } from 'react-native';
import { urlFor } from '../sanity';

function CardCategory({imgUrl, title}) {
  return (
    <View className="mr-2 relative">
      <TouchableOpacity>
        <Image 
          source={{ uri: urlFor(imgUrl).url() }}
          className='h-16 w-16 rounded '
        />
        <Text className="absolute bottom-1 left-1 font-bold text-white items-center ">{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CardCategory;