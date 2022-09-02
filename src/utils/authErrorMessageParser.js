export default function(errorCode){
    switch (errorCode) {
        case 'auth/email-already-exist':
            return 'Kullanıcı zaten mevcut !'
        case 'auth/invalid-email':
            return 'Geçersiz mail adresi!'
            
        case 'auth/user-not-found':
            return 'Kullanıcı Bulunamadı!'
    
        case 'auth/weak-password':
            return 'Parola Çok Zayıf!'   
                
        case 'auth/wrong-password':
            return 'Parola Geçersiz!'
        default:
            return 'Bir Hata Oluştu'
    }
}