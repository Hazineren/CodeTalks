import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import styles from './RoomCard.styles'
import LinearGradient from 'react-native-linear-gradient';
const RoomCard = ({props,onPress}) => {
  return (
    
      <View style={styles.container}>
        <TouchableOpacity onPress={onPress}>
            <Text style={styles.txtCard}>{props.text}</Text>
        </TouchableOpacity>
      </View>
    
    
  )
}

export default RoomCard