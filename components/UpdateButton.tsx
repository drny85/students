"use client";
import { studentsCollection } from "@/firebase";
import { FieldValues } from "@/types";
import { Button } from "@radix-ui/themes";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import toast from "react-hot-toast";

type Props = {
  fields: FieldValues[];
  studentId: string;
};

const UpdateButton = ({ fields, studentId }: Props) => {
  const onUpdate = async () => {
    try {
      const docRef = doc(studentsCollection, studentId);
      const st = await getDoc(docRef);
      if (!st.exists()) {
        toast.error("Student not found");
        return;
      }
      await updateDoc(docRef, { fields });
      toast.success("Student updated successfully");
    } catch (error) {
      console.log(error);
    }
  };
  return <Button onClick={onUpdate}>Update</Button>;
};
export default UpdateButton;
