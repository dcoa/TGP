import { auth } from './firebase.config';


export const signup = async (email, password, name) => {

      const newUser = await auth.createUserWithEmailAndPassword(email, password);
      const currentUser = await auth.currentUser;
      await currentUser.updateProfile({ displayName: name, });
      return newUser;
  }

export const logIn =  async (email, password) => {
     return await auth.signInWithEmailAndPassword(email, password);
  }

  export const recoverPass = async (email) => {
    return  await auth.sendPasswordResetEmail(email);
  }

  export const signOut = async  () => {
    return await auth.signOut();  
  }