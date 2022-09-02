import { View, Text,Image } from 'react-native'
import React from 'react'
import styles from './Sign.styles'
import {Formik} from 'formik';
import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';
import Toast from 'react-native-toast-message';
import auth from '@react-native-firebase/auth'
import authErrorMessageParser from '../../../utils/authErrorMessageParser';

const Sign = ({navigation}) => {

  const [loading, setLoading] = React.useState(false);

  function handleBack(){
    navigation.goBack();
  }

  async function handleFormSubmit(formValues){
    if(formValues.password !== formValues.repassword){
      Toast.show({
        type:'info',
        text1:'Code Talks',
        text2:'Girilen Şifreler Uyuşmuyor',
        visibilityTime:2000
      });
      return;
    }
    try {
      setLoading(true);
      await auth().createUserWithEmailAndPassword(formValues.userMail,formValues.password);
      Toast.show({
        type:'success',
        text1:'Code Talks',
        text2:'Kullanıcı Oluşturuldu'
      })
      navigation.navigate('LoginPage');
      setLoading(false)
    } catch (err) {
      Toast.show({
        type:'error',
        text1:'Code Talks',
        text2:authErrorMessageParser(err.code),
        visibiltyTime:1000
      });
      setLoading(false)
      console.log(err.code,'123123123')
    }
  }

  const initialFormValues={
    userMail:'',
    password:'',
    repassword:'',
  }

  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require('../../../assets/logo.png')}></Image>
      <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
        {({values,handleChange, handleSubmit})=>(
          <>
            <Input onType={handleChange('userMail')} value={values.userMail} placeholder={'E-mail Adresini Giriniz'}/>
            <Input isSecure={true} onType={handleChange('password')} value={values.password} placeholder={'Şifrenizi Giriniz'}/>
            <Input isSecure={true} onType={handleChange('repassword')} value={values.repassword} placeholder={'Şifrenizi Tekrar Giriniz'}></Input>
            <Button text={'Kayıt Ol'} onPress={handleSubmit} loading={loading}></Button>
          </>
        )}
      </Formik>
      <Button text={'Geri'} onPress={handleBack} loading={loading} theme={'secondary'}/>
    </View>
  )
}

export default Sign