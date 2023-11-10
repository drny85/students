'use client';
import { Subscription } from '@/types';
import { Button } from '@radix-ui/themes';
import { useState } from 'react';

import { useSubscription } from '@/context/store';
import { getCheckoutUrl } from '@/utils/stripeLinks';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import ButtonLoading from '../ButtonLoading';
import Spinner from '../Spinner';

type Props = {
   subscription: Subscription;
};
const SubscriptionCard = ({ subscription }: Props) => {
   const [loading, setLoading] = useState(false);
   const { user, isLoaded } = useUser();
   const router = useRouter();
   const subs = useSubscription((s) => s.subscription);
   console.log(subs);

   const handleSubscription = async () => {
      try {
         if (!user) {
            router.push('/students');
            return;
         }

         setLoading(true);

         const url = await getCheckoutUrl(subscription.priceId, user!);
         if (url) {
            window.location.assign(url);
         }
      } catch (error) {
         console.log(error);
      } finally {
         setLoading(false);
      }
   };
   if (!isLoaded) return <Spinner />;
   return (
      <div className="flex flex-col md:flex-row space-x-0 md:space-x-8 space-y-12  md:space-y-0 justify-center items-center mt-10">
         <div className="bg-slate-200 rounded-xl">
            <div className="flex flex-col p-8 rounded-xl bg-white shadow-sm translate-x-4 translate-y-4 w-98 md:w-auto">
               <div className="my-3 font-semibold text-2xl">
                  {subscription.name}
               </div>
               <div className="text-sm font-light">
                  Manage your students notes
               </div>
               <div className="my-4">
                  <span className="font-bold text-base">
                     ${subscription.price}
                  </span>
                  <span className="font-light text-sm">/month</span>
               </div>

               <Button
                  disabled={loading || !isLoaded}
                  variant="outline"
                  radius="full"
                  size={'3'}
                  className="cursor-pointer"
                  onClick={handleSubscription}
               >
                  {loading ? (
                     <ButtonLoading />
                  ) : user ? (
                     'Subscribe'
                  ) : (
                     'Get Started'
                  )}
               </Button>
            </div>
         </div>
      </div>
   );
};

export default SubscriptionCard;
