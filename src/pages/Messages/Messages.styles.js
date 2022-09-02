import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#efebe9'
    },
    header_container:{
        flexDirection:'row',
        width:'90%',
        marginTop:12,
        padding:10,
        borderRadius:12,
        borderStyle:"dotted",
        backgroundColor:'#424242',
        borderWidth:1.5,
        alignSelf:'center',
        margin:5,
        alignItems:'center',
        justifyContent:'center'
    },
    txtHeader:{
        fontSize:17,
        color:'white',
        fontWeight:'bold',
        left:10
    }
})