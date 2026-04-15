import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ScreenNames from '../ScreenNames';
import HomeScreen from '../../srceens/HomeScreen/HomeScreen';
import FavoritesScreen from '../../srceens/FavoritesScreen/FavoritesScreen';
import Icon from 'react-native-vector-icons/Feather';
const Tab = createBottomTabNavigator<MainTabsList>();

export default function MainTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name={ScreenNames.HomeScreen} component={HomeScreen}
      options={{
        tabBarLabel:"Home",
        tabBarIcon:({color,size})=>{
          return(
            <Icon name="home" size={size} color={color} />
          )
        },
        tabBarActiveTintColor:"green",
        tabBarInactiveTintColor:"gray",
      }}
      />
      <Tab.Screen name={ScreenNames.FavoritesScreen} component={FavoritesScreen}
      options={{
        tabBarLabel:"Favorites",
        tabBarIcon:({color,size})=>{
          return(
            <Icon name="heart" size={size} color={color} />
          )
        },
        tabBarActiveTintColor:"red",
        tabBarInactiveTintColor:"gray",
      }}
      />
    </Tab.Navigator>
  )
}
export type MainTabsList = {
    [ScreenNames.HomeScreen]: undefined,
    [ScreenNames.FavoritesScreen]: undefined,
}