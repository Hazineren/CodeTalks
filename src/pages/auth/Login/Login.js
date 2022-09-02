import { View, Text,Image } from 'react-native'
import React from 'react'
import styles from './Login.styles'
import { Formik } from 'formik';
import Button from './../../../components/Button/Button'
import Input from '../../../components/Input/Input';
import auth from '@react-native-firebase/auth'
import IonIcon from 'react-native-vector-icons/Ionicons'
import Toast from 'react-native-toast-message';
import authErrorMessageParser from '../../../utils/authErrorMessageParser';

const Login = ({navigation}) => {

  const [loading,setLoading] = React.useState(false);

  const handleSign=()=>{
    navigation.navigate('SignPage')
  }

  async function handleFormSubmit(formValues){
    try {
      setLoading(true);
      await auth().signInWithEmailAndPassword(formValues.userMail, formValues.password);
      setLoading(false);
      navigation.navigate('RoomsPage')
    } catch (err) {
      Toast.show({
        type:'error',
        text1:'Code Talks',
        text2:authErrorMessageParser(err.code),
      })
      console.log(err.code,'***********')
      setLoading(false)
    }
  }


  const initialFormValues={
    userMail:'',
    password:'',
  }

  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require('../../../assets/logo.png')}></Image>
      <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
        {({values, handleChange, handleSubmit})=>(
          <>
            <Input onType={handleChange('userMail')} value={values.userMail} placeholder={'E-mail Adresini Giriniz'}/>
            <Input isSecure={true} onType={handleChange('password')} value={values.password} placeholder={'Şifrenizi Giriniz'}/>
            <Button text={'Giriş Yap'} onPress={handleSubmit} loading={loading}/>
          </>
        )}
      </Formik>
      <Button text={'Kayıt Ol'} theme={'secondary'} onPress={handleSign}></Button>
    </View>
  )
}

export default Login