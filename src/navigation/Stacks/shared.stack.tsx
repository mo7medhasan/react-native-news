import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScreenNames from '../ScreenNames';
import ArticleDetails from '../../srceens/ArticleDetails/ArticleDetails';
import { NewsItem } from '../../types';
import SettingScreen from '../../srceens/SettingScreen/SettingScreen';
const Stack = createNativeStackNavigator<SharedStackList>();

export default function SharedStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={ScreenNames.ArticleDetails} component={ArticleDetails} />
            <Stack.Screen name={ScreenNames.SettingScreen} component={SettingScreen} />
        </Stack.Navigator>
    )
}   
export type SharedStackList = {
    [ScreenNames.ArticleDetails]: { article: NewsItem }
    [ScreenNames.SettingScreen]: undefined
}