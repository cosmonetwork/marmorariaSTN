import { initializeApp } from 'firebase'

const app = initializeApp({
  apiKey: 'AIzaSyBI76JR_7g_yRHBR5CqARvIb8djWtSWn9o',
  authDomain: 'marmorariastn.firebaseapp.com',
  databaseURL: 'https://marmorariastn.firebaseio.com',
  projectId: 'marmorariastn',
  storageBucket: 'marmorariastn.appspot.com',
  messagingSenderId: '986072239912'
})

export const db = app.database()
export const clienteRef = db.ref('bd')
