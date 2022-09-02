import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import styles from './Button.styles'

const Button = ({text,onPress,loading,theme='primary'}) => {
  return (
    <TouchableOpacity style={styles[theme].container} onPress={onPress} disabled={loading}>
        {loading ? (<ActivityIndicator color={'white'}></ActivityIndicator>
        ):(<Text style={styles[theme].title}>{text}</Text>)}
    </TouchableOpacity>
  )
}

export default Button