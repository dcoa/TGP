
/*import {firebase,messaging} from '../firebase/firebase.config';

export const addMessage = () => 
firebase.firestore ().collection ( 'correo' ).add ({
    para :  'someone@example.com' ,
    mensaje : {
      asunto :  "¡Hola  jael desde Firebase!" ,
      html :  'Este es un cuerpo de correo electrónico <code> HTML </code>.' ,
    },
  })

  export const sendPermissions = () =>{
   messaging.getToken({vapidKey: 'AAAAc2rybyE:APA91bHxQkPxtQYgrrmd-7hw38mEoHMrKKuuWVqFBnFM9rV_YONWYPEIarAaTNV7f7v62Cyv_MEsgqQ6EHtrnfMnZ7UVhOrK3bYs5KXuCr-gcXSLi_CP8x_1temOhALZlEFD44D4T1Ls'}).then((currentToken) => {
  if (currentToken) {
    console.log(currentToken)
    //sendTokenToServer(currentToken);
    //updateUIForPushEnabled(currentToken);
  } else {
    // Show permission request.
    console.log('No registration token available. Request permission to generate one.');
    // Show permission UI.
    //updateUIForPushPermissionRequired();
    //setTokenSentToServer(false);
  }
}).catch((err) => {
  console.log('An error occurred while retrieving token. ', err);
  //showToken('Error retrieving registration token. ', err);
  //setTokenSentToServer(false);
});
  }*/