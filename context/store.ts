import { SubscriptionType } from '@/types';
import { create } from 'zustand';

type StudentsState = {
   studentsTotal: number;
   setStudentsTotal: (total: number) => void;
};
type SubscriptionState = {
   subscription: SubscriptionType | null | undefined;
   setSubscription: (subscription: SubscriptionType | null) => void;
};
export const useStudentsStore = create<StudentsState>((set) => ({
   studentsTotal: 0,
   setStudentsTotal: (total: number) => set({ studentsTotal: total })
}));

export const useSubscription = create<SubscriptionState>((set) => ({
   subscription: null,
   setSubscription: (subscription: SubscriptionType | null) =>
      set({ subscription })
}));
