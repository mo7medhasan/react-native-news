import { Alert, Pressable, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, {  useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { StackNames } from '../../navigation/StackNames'
import { MainParamList } from '../../navigation/mainStack'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './style'

type LoginScreenNavProp = NativeStackNavigationProp<MainParamList>

export default function LoginScreen() {
  const { navigate } = useNavigation<LoginScreenNavProp>()
    const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const handleLogin = () => {
    if (email === 'admin' && password === 'admin') {
      navigate(StackNames.MainTabs)
    } else {
      Alert.alert('Invalid email or password ' + email + ' ' + password)
    }
  }

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
            value={email}
            onChangeText={setEmail}
            placeholderTextColor="#999"
          /></View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Password</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              placeholderTextColor="#999"
              secureTextEntry={!showPassword}
            />
            <Pressable
              onPress={() => setShowPassword(prev => !prev)}
              style={styles.eyeButton}
            >
              <Text style={styles.eyeIcon}>{showPassword ? '🙈' : '👁️'}</Text>
            </Pressable>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={handleLogin}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

    </SafeAreaView>
  )
}