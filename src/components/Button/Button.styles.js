import { StyleSheet } from "react-native";

const baseStyle=StyleSheet.create({
    container:{
        padding:10,
        margin:7,
        alignItems:'center',
        borderRadius:10
    },
    title:{
        fontSize:17,
        fontWeight:'bold'
    }
});

export default{
    primary: StyleSheet.create({
        ...baseStyle,
        container:{
            ...baseStyle.container,
            backgroundColor:'#263238',
            borderWidth:1,
            borderColor:'white'
        },
        title:{
            ...baseStyle.title,
            color:'white',
            fontWeight:'bold'
        }
    }),
    secondary: StyleSheet.create({
        ...baseStyle,
        container:{
            ...baseStyle.container,
            backgroundColor:'#b0bec5',
            borderWidth:1,
        },
        title:{
            ...baseStyle.title,
            color:'black',
            fontWeight:'bold'
        }
    })
}
    