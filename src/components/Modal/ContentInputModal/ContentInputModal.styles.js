import { StyleSheet,Dimensions } from "react-native";

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
    container:{
        backgroundColor:'white',
        padding:15,
        marginHorizontal:10,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        height:deviceSize.height/3,
        width:'95%'
    },
    modal:{
        justifyContent:'flex-end',
        margin:0
    },
    inner_container:{
        flex:1
    },
    btnEkle:{
        alignItems:'center',
        borderRadius:10,
        backgroundColor:'#870000',
        padding:5
    },
    btnEkleTxt:{
        fontSize:17,
        color:'white'
    }
})