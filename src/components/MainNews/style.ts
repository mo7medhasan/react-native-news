import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
    containerList:{
        marginTop:10,
        
    },
    ActivityIndicator:{
        flex: 1,
         justifyContent: 'center'
    },
    container:{
       marginHorizontal:10,
       width:350,
    },
    imageStyle:{
        borderRadius:20,
    },
    whiteBackground:{
       marginTop:100, 
       marginBottom:20,
       marginHorizontal:10,
       padding:10,
       borderRadius:10,
       backgroundColor:'rgba(255,255,255,0.7)',
    },
    titleBackground:{
        backgroundColor:'rgba(167, 5, 5, 0.84)',
        paddingHorizontal:10,
        paddingVertical:5,
        borderRadius:5,
        alignSelf:'flex-start',
    },
    title:{
       color:'white',
       fontSize:12,
    },
    description:{
        marginTop:10,
        color:"black",
       
    },
    
})
export default styles