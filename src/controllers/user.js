import {firebase} from '../firebase/firebase.config';

const addUser = (user) => firebase.firestore().collection('documents').add(user);

const getUserById = (userId) => firebase.firestore().collection('documents').doc(userId).get();

const updateUser = (userId, user) => firebase.firestore().collection('documents').doc(userId).update(user);

const getUsers = (callback) => firebase.firestore().collection('documents')
  .onSnapshot({ includeMetadataChanges: true }, ((snap) => {
    const gettingUsers = snap.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    callback(gettingUsers);
  }));

  const getTaskNot = (callback) => firebase.firestore().collectionGroup('tareas').where('completada', '==', 'No completada')
      .onSnapshot({ includeMetadataChanges: true }, ((snap) => {
    const gettingUsers = snap.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    
    callback(gettingUsers);
  }));

  const addSub =(idDoc, data) => {
    firebase.firestore().collection('documents').doc(idDoc).collection('tareas').add(
     data
    )
    .catch(console.log)
  };





export { addUser, getUserById, updateUser, getUsers, addSub, getTaskNot};
