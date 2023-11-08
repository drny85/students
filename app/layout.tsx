import { Container, Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from 'react-hot-toast';

import FirebaseProvider from '@/context/FirebaseProvider';
import './globals.css';
// import { ThemeProvider } from 'next-themes';

import { ClerkProvider } from '@clerk/nextjs';
import SubscriptionProvider from '@/context/SubscriptionProvider';
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
               {/* <ThemeProvider attribute="class"> */}
               <Theme accentColor="gold" grayColor="slate" radius="large">
                  <main className="max-w-3xl mx-auto p-4">
                     <FirebaseProvider>
                        <SubscriptionProvider>
                           <Container>
                              <Toaster />
                              {children}
                           </Container>
                        </SubscriptionProvider>
                     </FirebaseProvider>
                  </main>
               </Theme>
               {/* </ThemeProvider> */}
            </body>
         </html>
      </ClerkProvider>
   );
}
