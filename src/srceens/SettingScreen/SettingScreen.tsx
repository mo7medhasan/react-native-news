import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './style'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { MainParamList } from '../../navigation/mainStack'
import { StackNames } from '../../navigation/StackNames'

export default function SettingScreen() {
    const { reset } = useNavigation<NativeStackNavigationProp<MainParamList>>()
    const handleLogout = () => {
        reset({
            index: 0,
            routes: [{ name: StackNames.AuthStack }],
        })
    }
  return (
    <SafeAreaView style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={handleLogout}>
            <Text style={styles.buttonText}>LogOut</Text>
        </TouchableOpacity>
    </SafeAreaView>
  )
}