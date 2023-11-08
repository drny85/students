import { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

import { adminDB, admingAuth } from '@/firebase-admin';
import { FirestoreAdapter } from '@auth/firebase-adapter';
import { signInWithEmailAndPassword } from 'firebase/auth';
import Credentials from 'next-auth/providers/credentials';
import { auth } from './firebase';

const authOptions: NextAuthOptions = {
   providers: [
      GoogleProvider({
         clientId: process.env.GOOGLE_CLIENT_ID!,
         clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
         authorization: {
            params: {
               prompt: 'consent',
               access_type: 'offline',
               response_type: 'code'
            }
         }
      }),
      Credentials({
         name: 'Email & Password',
         credentials: {
            email: {
               label: 'Email',
               type: 'email',
               placeholder: 'Email Address'
            },
            password: {
               label: 'Password',
               type: 'password',
               placeholder: 'Password'
            }
         },
         async authorize(credentials, req) {
            if (!credentials || !credentials.email || !credentials.password)
               throw new Error('Email and password required');

            return await signInWithEmailAndPassword(
               auth,
               credentials.email,
               credentials.password
            )
               .then(({ user }) => {
                  if (user) {
                     return {
                        id: user.uid,
                        email: user.email,
                        name: user.displayName,
                        image: user.photoURL
                     };
                  } else {
                     return null;
                  }
               })
               .catch((err) => {
                  console.log('Error siging with credetials', err);
                  const e = err as Error;
                  throw new Error('Invalid email or password');
               });
         }
      })
   ],

   callbacks: {
      async session({ session, token }) {
         if (session.user) {
            if (token.sub) {
               //console.log('TOKEN', token);
               session.user.id = token.sub;
               const fToken = await admingAuth.createCustomToken(token.sub);
               session.firebaseToken = fToken;
            }
         }

         return session;
      },
      jwt: async ({ account, user, token }) => {
         if (user) {
            token.user = user;
            token.sub = user.id;
         }
         if (token) {
            try {
               const t = await admingAuth.createUser({
                  uid: token.sub,
                  email: token.email!,
                  displayName: token.name,
                  photoURL: token.picture,
                  emailVerified: true
               });
            } catch (error) {
               console.log(error);
            }

            // const credential = GoogleAuthProvider.credential(t);
            // const user = await signInWithCredential(auth, credential);
            // console.log('USER => NEW', user);

            // console.log('TOKEN =>', account.access_token);
            // const credential = GoogleAuthProvider.credential(
            //    account.access_token
            // );
            // const user = await signInWithCredential(auth, credential);
         }
         return token;
      }
   },

   secret: process.env.NEXTAUTH_SECRET,
   adapter: FirestoreAdapter(adminDB),
   session: { strategy: 'jwt' },
   pages: {
      signIn: '/auth'
   }
};

export default authOptions;
