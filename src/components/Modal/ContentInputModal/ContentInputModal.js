import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
import styles from './ContentInputModal.styles'
import Modal from 'react-native-modal';

const ContentInputModal = ({visible,onClose,onSend,page}) => {
    const [text, setText] = React.useState(null);

    function handleSend(){
        if(!text){
            return;
        }
        onSend(text);
        setText(null);
    }

  return (
    <Modal swipeDirection='down'
    style={styles.modal}
    isVisible={visible}
    onSwipeComplete={onClose}
    onBackdropPress={onClose}
    onBackButtonPress={onClose}>
        <View style={styles.container}>
            <View style={styles.inner_container}>
                {
                    page=='Room'?(
                    <TextInput  placeholder='Oda ismi giriniz...' multiline onChangeText={setText}/>
                    ):(
                        <TextInput  placeholder='Mesajın...' multiline onChangeText={setText}/>
                    )
                }
            </View>
            <View style={styles.btnEkle}>
                <TouchableOpacity onPress={handleSend}>
                    <Text style={styles.btnEkleTxt}>Ekle</Text>
                </TouchableOpacity>
            </View>
        </View>
    </Modal>
  )
}

export default ContentInputModal