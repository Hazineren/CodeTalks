import { View, Text } from 'react-native'
import React from 'react'
import styles from './FloatingButton.styles'
import { TouchableOpacity } from 'react-native-gesture-handler'
import IonIcon from 'react-native-vector-icons/Ionicons'

const FloatingButton = ({onPress,icon}) => {
  return (
    <>
        <View style={styles.container} >
            <TouchableOpacity onPress={onPress}>
                <IonIcon name={icon} size={30} color='white'></IonIcon>
            </TouchableOpacity>
        </View>
    </>
  )
}

export default FloatingButton