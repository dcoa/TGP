
import { db} from "./firebase.config";

function addDocument(data) {
    db.collection('documents').add(data);
  }

  const updateTask = async (idDoc, idTareas, fields) => {
    try {
      await db.collection('documents').doc(idDoc).collection('tareas').doc(idTareas).update(fields);
    } catch (error) {
      console.log(error);
    }
  };
  
  const updateQuantity = async (idDoc,fields) => {
    try {
      await db.collection('documents').doc(idDoc).update(fields);
    } catch (error) {
      console.log(error);
    }
  };


  export  {
    addDocument,
    updateTask,
    updateQuantity 
   
    
  }

  