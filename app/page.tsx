'use client';
import Banner from '@/components/Banner';
import Spinner from '@/components/Spinner';
import SubscriptionCard from '@/components/subscriptions/SubcriptionCard';
import { useSubscription } from '@/context/store';
import { SubscriptionsData } from '@/data';
import { useUser } from '@clerk/nextjs';
import { Box, Grid } from '@radix-ui/themes';
import { redirect, useRouter } from 'next/navigation';
import { useEffect } from 'react';

const Home = async () => {
   const { user, isLoaded } = useUser();
   const router = useRouter();
   const subs = useSubscription((s) => s.subscription);
   if (!isLoaded) return <Spinner />;

   if (user && subs) router.replace('/students');

   return (
      <div className="min-h-screen w-full flex flex-col mx-auto">
         <Box className="h-1/2 flex-1 mx-auto p-10">
            <Banner />
         </Box>
         <Box className="flex-1">
            <Grid columns={{ initial: '1', sm: '1', md: '2' }}>
               {SubscriptionsData.map((s) => (
                  <SubscriptionCard key={s.id} subscription={s} />
               ))}
            </Grid>
         </Box>
      </div>
   );
};

export default Home;
