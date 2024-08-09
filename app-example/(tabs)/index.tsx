import { View, Text, Button, SafeAreaView, Image } from "react-native";
import { withExpoSnack } from 'nativewind';
import { useNavigation } from "@react-navigation/native";

function HomeScreen() {
  const navigation = useNavigation();
    return (
      <SafeAreaView className='p-24'>
        <Text className='text-red-500'>hello from home</Text>
       {/* <Text>
        <View>
          <Image 
            source={{
              uri: "https://links.papareact.com/wru",
            }}
          />
        </View>
       </Text> */}
      </SafeAreaView>
    )
}

export default withExpoSnack(HomeScreen)
