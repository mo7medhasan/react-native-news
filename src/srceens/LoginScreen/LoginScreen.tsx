import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { StackNames } from '../../navigation/StackNames'
import { MainParamList } from '../../navigation/mainStack'

type LoginScreenNavProp = NativeStackNavigationProp<MainParamList>

export default function LoginScreen() {
const { navigate } = useNavigation<LoginScreenNavProp>()
  return (
    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
        <TouchableOpacity 
        onPress={()=>navigate(StackNames.MainTabs)}
      >
            <Text
            style={{color:"red"}}>LoginScreen</Text>
        </TouchableOpacity>
    </View>
  )
}