'use client';
import SubscriptionCard from '@/components/subscriptions/SubcriptionCard';
import { SubscriptionsData } from '@/data';
import { getCheckoutUrl } from '@/utils/stripeLinks';
import { useUser } from '@clerk/nextjs';
import { Container, Flex } from '@radix-ui/themes';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const SubscriptionPage = () => {
   return (
      <Container>
         <Flex gap={'5'} align={'center'} justify={'center'}>
            {SubscriptionsData.map((s) => (
               <SubscriptionCard key={s.id} subscription={s} />
            ))}
         </Flex>
      </Container>
   );
};

export default SubscriptionPage;
