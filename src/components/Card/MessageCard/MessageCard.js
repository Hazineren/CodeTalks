import { View, Text } from 'react-native'
import React from 'react'
import styles from './MessageCard.styles'
import { formatDistance, parseISO } from 'date-fns'
import {tr} from 'date-fns/locale'
const MessageCard = ({message}) => {
  const formattedDate = formatDistance(parseISO(message.date),new Date(),{
    addSuffix:true,
    locale:tr
  })

  return (
    <View style={styles.container}>
      <View style={styles.header_container}>
        <Text style={styles.txtUser}>{message.username}</Text>
        <Text style={styles.txtDate}>{formattedDate}</Text>
      </View>
      <Text style={styles.txtMessage}>{message.text}</Text>
    </View>
  )
}

export default MessageCard