import SubscriptionCard from '@/components/subscriptions/SubcriptionCard';
import { SubscriptionsData } from '@/data';
import { UserButton } from '@clerk/nextjs';
import { Flex } from '@radix-ui/themes';
import React from 'react';

const Home = () => {
   return (
      <div className="min-h-scree w-full flex flex-col p-8">
         <UserButton />
         <Flex gap={'6'}>
            {SubscriptionsData.map((s) => (
               <SubscriptionCard key={s.id} subscription={s} />
            ))}
         </Flex>
      </div>
   );
};

export default Home;
