import { FieldValues } from "@/types";
import { Card, Heading } from "@radix-ui/themes";
import AnecdotalNotes from "@/components/StudentAnecdotals";

const StudentAnecdotals = ({ fields }: { fields: FieldValues[] }) => {
  return (
    <Card>
      <Heading as="h4" className="text-center">
        Anecdotal Notes
      </Heading>

      <AnecdotalNotes fields={fields} />
    </Card>
  );
};

export default StudentAnecdotals;
