import {
   DocumentData,
   FirestoreDataConverter,
   QueryDocumentSnapshot,
   SnapshotOptions
} from 'firebase/firestore';

import { SubscriptionType } from '@/types';

export const subscriptionConverter: FirestoreDataConverter<SubscriptionType> = {
   toFirestore(subscription: SubscriptionType): DocumentData {
      return { ...subscription };
   },
   fromFirestore(
      snapshot: QueryDocumentSnapshot,
      options: SnapshotOptions
   ): SubscriptionType {
      const data = snapshot.data(options) as SubscriptionType;
      const sub: SubscriptionType = {
         id: data.id,
         ...data
      };
      return sub;
   }
};
