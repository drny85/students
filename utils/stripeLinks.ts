'use client';
import { db, getCustomerPortal } from '@/firebase';
import { addDoc, collection, onSnapshot } from 'firebase/firestore';

export const getCheckoutUrl = async (
   priceId: string,
   user: any
): Promise<string> => {
   if (!user) throw new Error('Not authorized');
   const userId = user.id;
   const checkoutSessionRef = collection(
      db,
      'customers',
      userId,
      'checkout_sessions'
   );

   const docRef = await addDoc(checkoutSessionRef, {
      price: priceId,
      success_url: window.location.origin,
      cancel_url: window.location.origin
   });

   return new Promise<string>((resolve, reject) => {
      const unsubscribe = onSnapshot(docRef, (snap) => {
         const { error, url } = snap.data() as {
            error?: { message: string };
            url?: string;
         };
         if (error) {
            unsubscribe();
            reject(new Error(`An error occurred: ${error.message}`));
         }
         if (url) {
            console.log('Stripe Checkout URL:', url);
            unsubscribe();
            resolve(url);
         }
      });
   });
};

export const getPortalUrl = async (user: any): Promise<string> => {
   let d: { url: string };
   try {
      if (!user) throw new Error('User is not authenticated');

      const userId = user.id;
      const { data } = await getCustomerPortal({
         customerId: userId,
         returnUrl: window.location.origin + '/subscriptions'
      });
      console.log(data);

      // Add a type to the data
      d = data;
      console.log('Reroute to Stripe portal: ', data.url);
   } catch (error) {
      console.error(error);
   }

   return new Promise<string>((resolve, reject) => {
      if (d.url) {
         resolve(d.url);
      } else {
         reject(new Error('No url returned'));
      }
   });
};
