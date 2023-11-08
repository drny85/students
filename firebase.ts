// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from 'firebase/app';
import {
   CollectionReference,
   DocumentData,
   collection,
   getFirestore
} from 'firebase/firestore';
import { Anecdotal, Student, SubscriptionType } from './types';
import { getAuth } from 'firebase/auth';
import { subscriptionConverter } from './coverters/SubscriptionConverter';
import { getFunctions, httpsCallable } from 'firebase/functions';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const functions = getFunctions(app, 'us-central1');
const auth = getAuth(app);

export const createCollection = <T = DocumentData>(collectionName: string) => {
   return collection(db, collectionName) as CollectionReference<T>;
};

export const getCustomerPortal = httpsCallable<
   { customerId: string; returnUrl: string },
   { url: string }
>(functions, 'ext-firestore-stripe-payments-createPortalLink');
export const initFirebase = () => {
   return app;
};

// Initialize Firebase
export const studentsCollection = createCollection<Student>('students');
export const anecdotalsCollection = createCollection<Anecdotal>('anecdotals');
export const subscriptionRef = (userId: string) =>
   createCollection<SubscriptionType>(
      `customers/${userId}/subscriptions`
   ).withConverter(subscriptionConverter);
export const customersCollection = (userId: string) =>
   createCollection<any>(`customers/${userId}/checkout_sessions`);

export { db, auth, app };
