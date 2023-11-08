'use client';

import { auth } from '@/firebase';
import { useAuth } from '@clerk/nextjs';
import { signInWithCustomToken } from 'firebase/auth';
import { PropsWithChildren, useEffect } from 'react';

const FirebaseProvider = ({ children }: PropsWithChildren) => {
   const { getToken } = useAuth();
   useEffect(() => {
      const signInWithClerk = async () => {
         const token = await getToken({ template: 'integration_firebase' });
         if (!token) return;
         await signInWithCustomToken(auth, token);

         /**
          * The userCredentials.user object will call the methods of
          * the Firebase platform as an authenticated user.
          */
      };

      signInWithClerk();
   }, []);
   return <>{children}</>;
};

export default FirebaseProvider;
