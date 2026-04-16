import { StyleSheet } from "react-native";
import { Fonts } from "../../utils/constants/fonts";

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    button:{
        width:100,
        height:40,
        backgroundColor:'red',
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
    },
    buttonText:{
        color:'white',
        fontSize:16,
        fontFamily:Fonts.AtmaBold,
    },
    
})
export default styles