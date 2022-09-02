import { View, Text, FlatList } from 'react-native'
import React from 'react'
import styles from './Rooms.styles'
import FloatingButton from '../../components/FloatingButton'
import ContentInputModal from '../../components/Modal/ContentInputModal/ContentInputModal'
import auth from '@react-native-firebase/auth'
import database from '@react-native-firebase/database';
import RoomCard from '../../components/Card/RoomCard/RoomCard'
import parseContentData from '../../utils/parseContentData'
import IonIcon from 'react-native-vector-icons/Ionicons'

const Rooms = ({navigation}) => {
  const [inputModalVisible, setInputModalVisible] = React.useState(false);
  const [contentList, setContentList]=React.useState([]);

  React.useEffect(()=>{
    database().ref('rooms/').on('value',snapshot=>{
      const contentData = snapshot.val();
      const parsedData = parseContentData(contentData || {})
      setContentList(parsedData)
      console.log(contentList,'33333333333')
    })
  },[])

  function handleInputToggleModal(){
    setInputModalVisible(!inputModalVisible);
  }

  function handleSendContent(content){
    handleInputToggleModal();
    sendContent(content)
  }

  function sendContent(content){

    const contentObject={
      text: content,
    }

    database().ref('rooms/').push(contentObject)
  }

  function handleRoomSelect(item){
    navigation.navigate('MessagesPage',item)
  }

  const renderContent =({item})=><RoomCard props={item} onPress={()=>handleRoomSelect(item)}/>
  const emptyComponent=<Text style={{marginVertical:400,justifyContent:'center',alignSelf:'center',alignItems:'center'}}>Liste Boş</Text>

  return (
    <View style={styles.container}>
      <View style={styles.header_container}>
        <Text style={styles.rooms}>Odalar</Text>
        <IonIcon style={{marginTop:10,marginLeft:15}} name='log-out-outline' size={32} color='black' onPress={()=>auth().signOut()}/>
      </View>
      
      <FlatList numColumns={2} data={contentList} renderItem={renderContent} ListEmptyComponent={emptyComponent}></FlatList>
      <FloatingButton icon={'add-outline'} onPress={handleInputToggleModal}/>
      <ContentInputModal 
      onSend={handleSendContent}
      visible={inputModalVisible} page='Room' onClose={handleInputToggleModal}/>
    </View>
  )
}

export default Rooms