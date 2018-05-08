import Rebase from 're-base'
import firebase from 'firebase'

const config = {
    apiKey: 'AIzaSyC2Zlo7shvqD7lkL8dhikmIKyakCczgH1M',
    authDomain: 'animal-protector.firebaseapp.com',
    databaseURL: 'https://animal-protector.firebaseio.com',
    projectId: 'animal-protector',
    storageBucket: 'animal-protector.appspot.com',
    messagingSenderId: '463250897441'
  }

const app = firebase.initializeApp(config)
const base = Rebase.createClass(app.database())
export const auth =  firebase.auth()

export default base
