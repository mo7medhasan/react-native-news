import { StyleSheet } from "react-native";
import { Fonts } from "../../utils/constants/fonts";

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    container2:{
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:20,
    },
    header:{
        fontSize:24,
        fontFamily:Fonts.AtmaBold,
    },
    subHeader:{
        fontSize:16,
        fontFamily:Fonts.AtmaRegular,
    },
    formContainer:{
        marginTop:20,
    },
    inputContainer:{
        marginBottom:10,
    },
    inputLabel:{
        fontSize:16,
        fontFamily:Fonts.AtmaRegular,
    },
    input:{
        width:300,
        height:40,
        borderColor:'gray',
        borderWidth:1,
        borderRadius:20,
        paddingHorizontal:10,
    },
    button:{
        marginTop:20,
        width:200,
        height:40,
        backgroundColor:'blue',
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