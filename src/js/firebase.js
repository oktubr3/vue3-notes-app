import { initializeApp } from 'firebase/app'
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {

  apiKey: 'AIzaSyBSdflLYW9gFAGIW6ZHmLctLVYsh6U3zvI',

  authDomain: 'notedamus-f443b.firebaseapp.com',

  projectId: 'notedamus-f443b',

  storageBucket: 'notedamus-f443b.appspot.com',

  messagingSenderId: '290096795316',

  appId: '1:290096795316:web:6438b7ab6ada3ef14f91e1'

}


// Initialize Firebase

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)


export { db }