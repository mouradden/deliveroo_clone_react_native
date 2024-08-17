import { useNavigation } from '@react-navigation/native'
import { View, TouchableOpacity, TextInput, Alert } from 'react-native'
import React from 'react'
import { XCircleIcon } from 'react-native-heroicons/outline/'
// const PreparingOrderScreen = () => {
//   return (
//     <View>
//       <Text>PreparingOrderScreen</Text>
//     </View>
//   )
// }

// export default PreparingOrderScreen
const PreparingOrderScreen = () => {
  const navigation = useNavigation();
  const [text, setText] = React.useState('');
  const hasUnsavedChanges = Boolean(text);

  React.useEffect(
    () =>
      navigation.addListener('beforeRemove', (e) => {
        if (!hasUnsavedChanges) {
          // If we don't have unsaved changes, then we don't need to do anything
          return;
        }

        // Prevent default behavior of leaving the screen
        e.preventDefault();

        // Prompt the user before leaving the screen
        Alert.alert(
          'Discard changes?',
          'You have unsaved changes. Are you sure to discard them and leave the screen?',
          [
            { text: "Don't leave", style: 'cancel', onPress: () => {} },
            {
              text: 'Discard',
              style: 'destructive',
              // If the user confirmed, then we dispatch the action we blocked earlier
              // This will continue the action that had triggered the removal of the screen
              onPress: () => navigation.dispatch(e.data.action),
            },
          ]
        );
      }),
    [navigation, hasUnsavedChanges]
  );

  return (
    <View>
      <TextInput
        value={text}
        placeholder="Type something…"
        onChangeText={setText}
        className='border p-4'
      />

      <TouchableOpacity className='absolute right-0'
            onPress={navigation.goBack}
        >
            <XCircleIcon size={48} color="white" fill="#00CCBB"/>
      </TouchableOpacity>
    </View>
  );
}

export default PreparingOrderScreen;