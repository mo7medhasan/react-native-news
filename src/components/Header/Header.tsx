import { Image, TouchableOpacity, Text, View } from "react-native"
import styles from "./style"
import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { MainParamList } from "../../navigation/mainStack"
import { StackNames } from "../../navigation/StackNames"
import ScreenNames from "../../navigation/ScreenNames"

type HeaderNavProp = NativeStackNavigationProp<MainParamList>

const Header = () => {
    const { navigate } = useNavigation<HeaderNavProp>()
    const handleSetting = () => {
        navigate(StackNames.SharedStack, { screen: ScreenNames.SettingScreen })
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handleSetting}>
                <Image source={require('../../assets/images/boy.png')} style={styles.img} />
            </TouchableOpacity>
            <Text style={styles.title}>Mk News</Text>
            <Image source={require('../../assets/images/note.png')} style={styles.img} />

        </View>
    )
}


export default Header