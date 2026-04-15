import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ScreenNames from '../ScreenNames';
import LoginScreen from '../../srceens/LoginScreen/LoginScreen';

const Stack = createNativeStackNavigator<MainParamList>();

export default function AuthStack() {
  return (
   <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name={ScreenNames.LoginScreen} component={LoginScreen} />
   </Stack.Navigator>
  )
}
export type MainParamList = {
    [ScreenNames.LoginScreen]: undefined,
}