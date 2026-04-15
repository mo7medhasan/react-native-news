import { Image, Text, View } from "react-native"
import styles from "./style"

const Header = () => {

    return (
        <View style={styles.container}>
            <Image source={require('../../assets/images/boy.png')} style={styles.img} />
            <Text style={styles.title}>Mk News</Text>
            <Image source={require('../../assets/images/note.png')} style={styles.img} />

        </View>
    )
}


export default Header