import firebase from 'firebase'
import 'firebase/firestore';

export const useUser = ()=> {
    const dbh = firebase.firestore();

    const createUser = async(id: string, email: string , username:string) : Promise<any> => {
        var userData = {
            email,
            username,
            lists: [],
        };
        
        dbh
            .collection("users")
            .doc(id)
            .set(userData)
            .catch(function (error) {
            console.error("Error adding document: ", error);
            });
          
    }

    
    return {createUser}
}