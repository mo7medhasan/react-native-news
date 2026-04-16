import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { StackNames } from '../../navigation/StackNames'
import { MainParamList } from '../../navigation/mainStack'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './style'

type LoginScreenNavProp = NativeStackNavigationProp<MainParamList>

export default function LoginScreen() {
const { navigate } = useNavigation<LoginScreenNavProp>()
  return (
    <SafeAreaView style={styles.container}>
       <View style={styles.container2}>
        <Text style={styles.header}>LoginScreen</Text>
        <Text style={styles.subHeader}>Welcome to our app</Text>
       </View>
       <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Email</Text>
        <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#999"
        /></View>
        <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Password</Text>
        <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#999"
        secureTextEntry
        />
        </View>
       </View>
       <TouchableOpacity 
       style={styles.button}
       onPress={()=>navigate(StackNames.MainTabs)}
       >
        <Text style={styles.buttonText}>Login</Text>
       </TouchableOpacity>
       
    </SafeAreaView>
  )
}