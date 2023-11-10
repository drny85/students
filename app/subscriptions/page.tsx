'use client';
import Spinner from '@/components/Spinner';
import SubscriptionCard from '@/components/subscriptions/SubcriptionCard';
import { useSubscription } from '@/context/store';
import { SubscriptionsData } from '@/data';
import { getPortalUrl } from '@/utils/stripeLinks';
import { useUser } from '@clerk/nextjs';
import { Box, Button, Card, Container, Flex, Text } from '@radix-ui/themes';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import moment from 'moment';

const SubscriptionPage = () => {
   const subscription = useSubscription((s) => s.subscription);
   const [loading, setLoading] = useState(true);
   const router = useRouter();
   const { user } = useUser();
   console.log(subscription);

   const goToPortal = async () => {
      try {
         if (!user) return;
         setLoading(true);
         const url = await getPortalUrl(user);
         console.log('URL', url);

         if (url) {
            router.push(url);
         }
      } catch (error) {
         console.log(error);
      } finally {
         setLoading(false);
      }
   };

   useEffect(() => {
      setLoading(false);
   }, []);

   if (loading) return <Spinner />;

   return (
      <Container>
         {subscription && !loading && (
            <Flex
               mt={'4'}
               justify={'center'}
               direction={'column'}
               gap={'3'}
               className="max-w-xl"
            >
               <Flex justify={'between'} mb={'3'}>
                  <Text className="text-center text-2xl">My Subscription</Text>
                  <Button onClick={goToPortal} variant="soft">
                     Manage Subscription
                  </Button>
               </Flex>
               <Box className=" mx-auto flex max-w-md">
                  <Flex
                     className="w-full shadow-md shadow-slate-300 rounded-md cursor-pointer hover:bg-slate-100 hover:scale-105 transition-all"
                     direction={'column'}
                     align={'center'}
                     gap={'4'}
                     p={'4'}
                  >
                     <Text className="text-3xl font-semibold text-center">
                        {subscription.role === 'premium'
                           ? 'Premium Plan'
                           : 'Basic Plan'}
                     </Text>
                     <Text className="text-xl font-bold">
                        ${subscription.items[0].price.unit_amount! / 100}
                     </Text>
                     <Text>
                        Member Since{' '}
                        {moment(subscription.created.toDate()).format('ll')}
                     </Text>
                  </Flex>
               </Box>
            </Flex>
         )}
         {!subscription && loading && (
            <Flex gap={'5'} align={'center'} justify={'center'}>
               {SubscriptionsData.map((s) => (
                  <SubscriptionCard key={s.id} subscription={s} />
               ))}
            </Flex>
         )}
      </Container>
   );
};

export default SubscriptionPage;
