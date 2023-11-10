import { db } from '@/firebase';
import { SubscriptionType } from '@/types';
import { collection, onSnapshot, query, where } from 'firebase/firestore';

export const getPremiumStatus = async (user: any) => {
   if (!user) throw new Error('User not logged in');
   const userId = user.id;

   const subscriptionsRef = collection(
      db,
      'customers',
      userId,
      'subscriptions'
   );
   const q = query(
      subscriptionsRef,
      where('status', 'in', ['trialing', 'active'])
   );

   return new Promise<SubscriptionType | null>((resolve, reject) => {
      const unsubscribe = onSnapshot(
         q,
         (snapshot) => {
            // In this implementation we only expect one active or trialing subscription to exist.
            console.log('Subscription snapshot', snapshot.docs.length);
            if (snapshot.docs.length === 0) {
               console.log('No active or trialing subscriptions found');
               resolve(null);
            } else {
               console.log('Active or trialing subscription found');
               const data = snapshot.docs[0].data();
               console.log('Subscription data', data.status);
               resolve(data as SubscriptionType);
            }
            unsubscribe();
         },
         reject
      );
   });
};
