'use client';
import { Flex, Text } from '@radix-ui/themes';

import { UserButton, useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import AddStudentButton from './AddStudentButton';

const Header = () => {
   const router = useRouter();
   const { user } = useUser();

   if (!user) return null;

   return (
      <nav className="p-4">
         <Flex justify={'between'}>
            <UserButton />

            <Text className="font-bold hidden md:block" size={'5'}>
               My Students
            </Text>

            <Flex align={'center'} gap={'4'}>
               <Text
                  onClick={() => router.push('/subscriptions')}
                  className="cursor-pointer text-gray-400 font-semibold hover:text-gray-400 hover:scale-110 mr-4"
               >
                  Subscription
               </Text>

               <AddStudentButton />
            </Flex>
         </Flex>
      </nav>
   );
};

export default Header;
