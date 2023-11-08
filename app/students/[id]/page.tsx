"use client";

import UpdateButton from "@/components/UpdateButton";
import { useStudent } from "@/app/hooks/useStudent";

import { Flex, Heading } from "@radix-ui/themes";
import { useParams, useRouter } from "next/navigation";
import AnecdotalNotes from "@/components/AnecdotalNotes";

const StudentPage = () => {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const { student, loading } = useStudent(id);
  if (loading || !student) return null;

  return (
    <div>
      <Flex direction={"column"} mt={"4"} gap={"4"}>
        <Flex justify="between" align="center">
          <div onClick={router.back}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </div>

          <Heading className="capitalize text-center">
            {student.name} {student.lastName} Notes
          </Heading>
          <UpdateButton fields={student.fields} studentId={id} />
        </Flex>

        <AnecdotalNotes fields={student.fields} />
      </Flex>
    </div>
  );
};

export default StudentPage;
