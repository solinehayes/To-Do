
import firebase from 'firebase'
import 'firebase/firestore';


export const useTasks =() =>{
    const dbh = firebase.firestore();

    const createTask = async (name:string,importance: string, listId: string) => {
        
        //Créer laliste et l'ajuter à la collection liste
        var newTaskData = {
            name,
            importance,
            isDone : false ,
        };
        let newTaskId = dbh.collection("tasks").doc();
        newTaskId.set(newTaskData)
        
        //ajouter la liste au tableau de liste de l'utilisateur.
        const listRef = dbh.collection("lists").doc(listId);
        listRef.update({
            tasks: firebase.firestore.FieldValue.arrayUnion(newTaskId)
        });

    }
    return {createTask}
}