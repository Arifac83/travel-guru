import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
export const initializeLoginFramework=()=>{
  if(firebase.apps.length===0){
    firebase.initializeApp(firebaseConfig);
  }    
}
export const handleGoogleSignIn=()=>{
    const googleProvider = new firebase.auth.GoogleAuthProvider();
   return  firebase.auth().signInWithPopup(googleProvider)
    .then(result=>{    
      const {displayName,email,photoURL}=result.user;
      const singedInUser={
        isSingedIn: true,
        name:displayName, 
        email:email, 
        photo:photoURL,
        success:true
      }
      return singedInUser;   
      console.log(displayName,email,photoURL);
    })
    .catch(error =>{
      console.log(error);
      console.log(error.message);
   })
  }
export const handleFBSignIn=()=>{
const fbProvider = new firebase.auth.FacebookAuthProvider();
   return firebase.auth().signInWithPopup(fbProvider).then(function(result) {    
     var token = result.credential.accessToken;
     var user= result.user;
     user.success=true;
     return user;  
   }).catch(function(error) {    
     var errorCode = error.code;
     var errorMessage = error.message;   
     var email = error.email;   
     var credential = error.credential; 
   });
}
 export const handleSignOut=()=>{    
   return firebase.auth().signOut()
    .then(result=>{
      const signOutUser={
        isSingedOut: false,
        name:'',
        photo:'',
        email:'',
        error:'',
        success:false
      };
      return signOutUser;
    })
.catch(error =>{

}) 
}
 
export const createUserWithEmailAndPassword=(name,email,password)=>{
return firebase.auth().createUserWithEmailAndPassword(email,password)
.then(res=>{
 const newUserInfo=res.user;
 newUserInfo.error='';
 newUserInfo.success=true; 
 updateUserName(name);
 VerifyEmail();
 return newUserInfo; 
  
})
.catch(error=> {
 const newUserInfo={};
 newUserInfo.error=error.message;
 newUserInfo.success=false;   
 return newUserInfo;
});
}

export const signInWithEmailAndPassword=(email,password)=>{    
return firebase.auth().signInWithEmailAndPassword(email,password)
.then(res => {
  const newUserInfo=res.user;
  newUserInfo.error='';
  newUserInfo.success=true; 
  return newUserInfo;
})
.catch(error=> {

const newUserInfo={};
  newUserInfo.error=error.message;
  newUserInfo.success=false;
  return newUserInfo; 

}); 
}
const updateUserName = name=>{
const user = firebase.auth().currentUser;
     user.updateProfile({
       displayName: name     
     }).then(function() {     
       console.log('user name successfully updated');
     }).catch(function(error) {
       console.log(error);
     });
}
export const VerifyEmail=()=>{
    var user = firebase.auth().currentUser;

    user.sendEmailVerification().then(function() {
      // Email sent.
    }).catch(function(error) {
      // An error happened.
    });
} 
export const resetPassword = email =>{
    var auth = firebase.auth();     
        auth.sendPasswordResetEmail(email).then(function() {
        // Email sent.
        }).catch(function(error) {
        // An error happened.
        });

}

