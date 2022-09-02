import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        width:'95%',
        padding:10,
        margin:10,
        borderWidth:1,
        borderRadius:14,
        alignSelf:'center',
        backgroundColor:'white'
    },
    header_container:{
        flexDirection:'row'
    },
    txtUser:{
        flex:1,
        color:'black',
        fontSize:17,
        fontWeight:'bold',
    },
    txtDate:{
        color:'black',
        fontSize:15
    },
    txtMessage:{
        color:'black',
        fontSize:15,
        marginTop:20
    }
})