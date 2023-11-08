'use client';
import { getPremiumStatus } from '@/utils/getPlanStatus';
import { useUser } from '@clerk/nextjs';
import { PropsWithChildren, useEffect } from 'react';
import { useSubscription } from './store';

const SubscriptionProvider = ({ children }: PropsWithChildren) => {
   const { user } = useUser();
   const setSub = useSubscription((s) => s.setSubscription);
   useEffect(() => {
      if (!user) return;
      getPremiumStatus(user)
         .then((s) => {
            setSub(s);
         })
         .catch((e: any) => {
            console.log(e);
            setSub(null);
         });
   }, [user]);
   return <>{children}</>;
};

export default SubscriptionProvider;
