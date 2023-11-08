'use client';
import { useSearchParams } from 'next/navigation';
import React from 'react';

const SubscriptionSuccess = () => {
   const { get } = useSearchParams();
   const subscriptionId = get('subId');
   return <div>SubscriptionSuccess {subscriptionId}</div>;
};

export default SubscriptionSuccess;
