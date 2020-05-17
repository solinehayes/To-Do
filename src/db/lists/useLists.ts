import { ListColors } from "../../components/createList/CreateList"
import firebase from 'firebase'
import 'firebase/firestore';


export const useLists =() =>{
    const dbh = firebase.firestore();

    const createList = async (name:string,color: ListColors, userId: string) => {
        
        //Créer laliste et l'ajuter à la collection liste
        var newListData = {
            name,
            color,
            tasks: [],
        };
        let newListId = dbh.collection("lists").doc();
        newListId.set(newListData)
        
        //ajouter la liste au tableau de liste de l'utilisateur.
        const userRef = dbh.collection("users").doc(userId);
        userRef.update({
            lists: firebase.firestore.FieldValue.arrayUnion(newListId)
        });

    }
    return {createList}
}