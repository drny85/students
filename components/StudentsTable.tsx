'use client';
import { studentsCollection } from '@/firebase';
import { useStudents } from '@/hooks/useStudents';
import { TrashIcon } from '@radix-ui/react-icons';
import {
   AlertDialog,
   Button,
   Container,
   Flex,
   Table,
   Text
} from '@radix-ui/themes';
import { deleteDoc, doc } from 'firebase/firestore';
import Link from 'next/link';
import toast from 'react-hot-toast';

const StudensTable = () => {
   const { students, loading } = useStudents();

   const onDelete = async (id: string) => {
      try {
         const docRef = doc(studentsCollection, id);
         await deleteDoc(docRef);
         toast.success('Student deleted successfully');
      } catch (error) {}
   };
   if (loading) return <Text>Loading...</Text>;
   if (students.length === 0)
      return (
         <div className="flex items-center justify-center ">
            <Text className="text-lg">No Students Added Yet</Text>
         </div>
      );
   return (
      <Container width={'100%'} className="mx-auto w-full">
         <Table.Root variant="surface" className="w-full">
            <Table.Header>
               <Table.Row>
                  <Table.ColumnHeaderCell>First Name</Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>Last Name</Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell align="center">
                     Action
                  </Table.ColumnHeaderCell>
               </Table.Row>
            </Table.Header>
            <Table.Body>
               {students.map((student) => (
                  <Table.Row key={student.id} align={'center'}>
                     <Table.Cell className="capitalize w-1/3">
                        {student.name}
                     </Table.Cell>
                     <Table.Cell className="capitalize w-1/3">
                        {student.lastName}
                     </Table.Cell>

                     <Table.Cell className="w-1/4">
                        <Flex gap={'3'} align={'center'} justify={'center'}>
                           <AlertDialog.Root>
                              <AlertDialog.Trigger>
                                 <Button variant="outline" color="red">
                                    <TrashIcon color="gray" fontSize={28} />
                                 </Button>
                              </AlertDialog.Trigger>
                              <AlertDialog.Content style={{ maxWidth: 450 }}>
                                 <AlertDialog.Title>
                                    Delete Student
                                 </AlertDialog.Title>
                                 <AlertDialog.Description size="2">
                                    Are you sure that you want to delete this
                                    student?
                                 </AlertDialog.Description>
                                 <Flex gap="3" mt="4" justify="end">
                                    <AlertDialog.Cancel>
                                       <Button variant="soft" color="gray">
                                          Cancel
                                       </Button>
                                    </AlertDialog.Cancel>
                                    <AlertDialog.Action>
                                       <Button
                                          variant="outline"
                                          color="red"
                                          onClick={() => onDelete(student.id!)}
                                       >
                                          Delete
                                       </Button>
                                    </AlertDialog.Action>
                                 </Flex>
                              </AlertDialog.Content>
                           </AlertDialog.Root>

                           <Button variant="outline">
                              <Link href={`students/${student.id}`}>View</Link>
                           </Button>
                        </Flex>
                     </Table.Cell>
                  </Table.Row>
               ))}
            </Table.Body>
         </Table.Root>
      </Container>
   );
};

export default StudensTable;
