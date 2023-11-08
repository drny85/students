'use client';
import { Avatar, Button, DropdownMenu, Flex, Text } from '@radix-ui/themes';

import AddStudentButton from './AddStudentButton';
import { getPortalUrl } from '@/utils/stripeLinks';
import { useRouter } from 'next/navigation';
import { UserButton, useUser } from '@clerk/nextjs';

const Header = () => {
   const router = useRouter();
   const { user, isSignedIn } = useUser();
   if (!isSignedIn) return;
   console.log('SESSION HEADER', user);
   const goToPortal = async () => {
      try {
         const url = await getPortalUrl();
         console.log('URL', url);
         if (url) {
            router.push(url);
         }
      } catch (error) {
         console.log(error);
      }
   };
   return (
      <nav>
         <Flex justify="between">
            <DropdownMenu.Root>
               <DropdownMenu.Trigger>
                  <Avatar radius="full" fallback="?" src={'/avatar.jpg'} />
               </DropdownMenu.Trigger>
               <DropdownMenu.Content className="mt-2 space-y-6">
                  <DropdownMenu.Item className="my-2">
                     <Text>{user.fullName}</Text>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item className="my-2">
                     <Text>{user.emailAddresses[0].emailAddress}</Text>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item className="my-2">
                     <Button
                        onClick={goToPortal}
                        variant="soft"
                        className="hover:text-white"
                     >
                        <Text>Manage Subscription</Text>
                     </Button>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item className="mt-4">
                     <UserButton />
                  </DropdownMenu.Item>
               </DropdownMenu.Content>
            </DropdownMenu.Root>
            <Text className="font-bold" size={'5'}>
               My Students
            </Text>
            <AddStudentButton />
         </Flex>
      </nav>
   );
};

export default Header;
