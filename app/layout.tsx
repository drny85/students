import { Container, Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from 'react-hot-toast';

import FirebaseProvider from '@/context/FirebaseProvider';
import './globals.css';

import SubscriptionProvider from '@/context/SubscriptionProvider';
import { ClerkProvider } from '@clerk/nextjs';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
   title: 'My Students Notes',
   description: 'Anecdotal Notes'
};

export default async function RootLayout({
   children
}: {
   children: React.ReactNode;
}) {
   return (
      <ClerkProvider>
         <html lang="en" suppressHydrationWarning>
            <body className={inter.className}>
               <Theme accentColor="gold" grayColor="slate" radius="large">
                  <main className="max-w-3xl mx-auto">
                     <FirebaseProvider>
                        <SubscriptionProvider>
                           <Container>
                              {children}
                              <Toaster />
                           </Container>
                        </SubscriptionProvider>
                     </FirebaseProvider>
                  </main>
               </Theme>
            </body>
         </html>
      </ClerkProvider>
   );
}
