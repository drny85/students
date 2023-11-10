'use client';

import { useStudentsStore } from '@/context/store';
import { studentsCollection } from '@/firebase';
import { Student } from '@/types';
import { useUser } from '@clerk/nextjs';
import { onSnapshot, query, where } from 'firebase/firestore';

import { useEffect, useState } from 'react';

export const useStudents = () => {
   const [students, setStudents] = useState<Student[]>([]);
   const [loading, setLoading] = useState(true);
   const { user } = useUser();
   const setTotal = useStudentsStore((s) => s.setStudentsTotal);

   useEffect(() => {
      if (!user) {
         setStudents([]);
         setLoading(false);
         return;
      }
      const q = query(studentsCollection, where('userId', '==', user.id));
      const sub = onSnapshot(q, (snap) => {
         setStudents(snap.docs.map((s) => ({ id: s.id, ...s.data() })));
         setTotal(snap.size);
         setLoading(false);
      });
      return sub;
   }, [user]);

   return { students, loading };
};
