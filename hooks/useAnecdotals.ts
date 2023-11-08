import { anecdotalsCollection, auth, studentsCollection } from "@/firebase";
import { Anecdotal } from "@/types";
import { onSnapshot, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";

export const useAnecdotals = () => {
  const [anecdotals, setAnecdotals] = useState<Anecdotal[]>([]);
  const user = auth.currentUser;
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!user) {
      setLoading(false);
      return;
    }
    console.log("useAnecdotals");
    const docQuery = query(
      anecdotalsCollection,
      where("student.id", "==", user.uid)
    );
    const sub = onSnapshot(docQuery, (snap) => {
      setAnecdotals(snap.docs.map((s) => ({ id: s.id, ...s.data() })));
      setLoading(false);
    });
    return sub;
  }, [user]);

  return { anecdotals, loading };
};
