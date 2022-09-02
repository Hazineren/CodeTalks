import { View, Text } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
import styles from './Input.styles'

const Input = ({placeholder,isSecure,value,onType}) => {
  return (
    <View style={styles.container}>
      <TextInput autoCapitalize='none' secureTextEntry={isSecure} style={styles.txtInput} placeholder={placeholder} onChangeText={onType} value={value}/>
    </View>
  )
}

export default Input