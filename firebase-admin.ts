// import admin from 'firebase-admin'
// import { initFirestore } from '@auth/firebase-adapter'

// let app;
// if (admin.apps.length === 0) {
//   app = admin.initializeApp({
//     credential: admin.credential.cert({
//         projectId: process.env.FIREBASE_PROJECT_ID,
//         clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
//         privateKey: process.env.FIREBASE_PRIVATE_KEY

//   })
// })
// }

// const adminDB = initFirestore({
//     credential:admin.credential.cert({
//         projectId: process.env.FIREBASE_PROJECT_ID,
//         clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
//         privateKey: process.env.FIREBASE_PRIVATE_KEY
//     })
// })

// const admingAuth = admin.auth(app)

// export {adminDB, admingAuth}
