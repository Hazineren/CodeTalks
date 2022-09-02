import { View, Text, FlatList,BackHandler } from 'react-native'
import React from 'react'
import styles from './Messages.styles'
import FloatingButton from '../../components/FloatingButton'
import ContentInputModal from '../../components/Modal/ContentInputModal/ContentInputModal'
import auth from '@react-native-firebase/auth'
import database from '@react-native-firebase/database'
import MessageCard from '../../components/Card/MessageCard'
import parseContentData from '../../utils/parseContentData'

const Messages = ({route}) => {
  const params = route.params;
  const [contentList, setContentList] = React.useState([]);
  const [inputModalVisible, setInputModalVisible] = React.useState(false);

  React.useEffect(()=>{
    database().ref(`rooms/${params.id}/${params.text}`).on('value',snapshot=>{
      const contentData = snapshot.val();
      const parsedData = parseContentData(contentData || {});
      console.log(parsedData,'***********')
      setContentList(parsedData);
      
    })
  },[])
  function handleInputToggleModal(){
    setInputModalVisible(!inputModalVisible);
  }

  function handleSendContent(content){
    handleInputToggleModal();
    sendContent(content);
  }

  function sendContent(content){
    const usermail = auth().currentUser.email;

    const contentObject={
      text: content,
      username: usermail.split('@')[0],
      date: new Date().toISOString(),
    }

    database().ref(`rooms/${params.id}/${params.text}`).push(contentObject)
  }

  const renderContent = ({item})=><MessageCard message={item}/>
  const renderEmpty=<Text style={{marginVertical:300,justifyContent:'center',alignSelf:'center',alignItems:'center'}}>Sohbet odası boş!</Text>
  return (
    <View style={styles.container}>
      <View style={styles.header_container}>
        <Text style={styles.txtHeader}>{params.text} odası kuruldu !</Text>
      </View>
      <FlatList data={contentList} renderItem={renderContent} ListEmptyComponent={renderEmpty}/>
      <FloatingButton icon={'add-outline'} onPress={handleInputToggleModal}/>
      <ContentInputModal visible={inputModalVisible}
      onClose={handleInputToggleModal}
      onSend={handleSendContent} page='Message'/>
    </View>
  )
}

export default Messages