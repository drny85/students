import Header from '@/components/Header';
import StudensTable from '@/components/StudentsTable';

import { redirect } from 'next/navigation';

const Home = async () => {
   return (
      <main className="flex min-h-screen flex-col max-w-2xl  mt-4 space-y-6 mx-auto">
         <Header />
         <StudensTable />
      </main>
   );
};

export default Home;
