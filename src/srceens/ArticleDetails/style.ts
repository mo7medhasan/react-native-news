import { StyleSheet } from "react-native";
import { Fonts } from "../../utils/constants/fonts";

const styles=StyleSheet.create({
   container:{
    flex:1,
    backgroundColor:'white',
   },
   header:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal:10,
    paddingVertical:10,
   },
   backButton:{
    padding:10,
    backgroundColor:'black',
    fontSize:16,    
    borderRadius:10,
   },
   textBackButton:{
    color:'white',
   },
   image:{
    width:'100%',
    height:"100%",
   },
   content:{
    paddingHorizontal:10,
    paddingVertical:10,
   },
   title:{
    fontSize:20,
fontFamily:Fonts.AtmaBold,
   },
   description:{
    fontSize:16,
    marginTop:10,
    fontFamily:Fonts.AtmaRegular,
   },
    
})
export default styles