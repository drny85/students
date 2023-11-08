import { FieldValues } from "@/types";
import * as Accordion from "@radix-ui/react-accordion";
import { Box, Card, Flex, Grid, Text, TextArea } from "@radix-ui/themes";
import React, { useEffect, useState } from "react";
import { BsChevronDown } from "react-icons/bs";
const letters = "abcdefghijklmnopqrstuvwxyz";
type Props = {
  fields: FieldValues[];
};
const AnecdotalNotes = ({ fields }: Props) => {
  const [open, setOpen] = useState(false);
  console.log(open);
  const [state, setState] = useState(fields);
  const onChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
    name: string
  ) => {
    let value = e.target.value;
    state.forEach((f) => {
      const t = f.subvalue.find((s) => s.name === name);
      if (t) {
        t.value = value;
        //console.log(t);
        const newState = [...state];
        const s = newState.map((s) => {
          if (s.value === f.value) {
            s.subvalue = f.subvalue;
          }
          return s; // return the object to maintain immutability.
        });

        setState(s);
      }
    });

    // console.log(e.target.value);
  };
  useEffect(() => {
    setState(fields);
  }, [fields]);
  return (
    <Box>
      {state.map((c) => (
        <Flex key={c.id} direction={"column"} gap={"5"} my="5">
          <Card>
            <Accordion.Root type="single" collapsible>
              <Accordion.Item className="AccordionItem" value={c.value}>
                <Accordion.Trigger className="text-xl font-semibold flex items-center justify-between w-full">
                  {c.id} - {c.value}
                  <BsChevronDown className="AccordionChevron font-bold h-6 w-8" />
                </Accordion.Trigger>
                <Accordion.Content>
                  {c.subvalue.map((f, i) => (
                    <Box key={f.name} my={"3"} p={"2"}>
                      <Text className="font-semibold">
                        {i + 1}- {f.name}
                      </Text>
                      {f.focus && f.focus.length > 0 && (
                        <Flex align={"center"} py="1" ml={"2"}>
                          <Text color="gray" className="font-semibold text-sm">
                            Focus:
                          </Text>

                          <Grid
                            columns={{ initial: "1", md: "2", lg: "3" }}
                            align={"center"}
                            justify={"center"}
                            className="bg-slate-100 rounded-md flex-1"
                            ml={"2"}
                          >
                            {f.focus?.map((f, i) => (
                              <Box className="flex-grow px-2 py-1" key={i}>
                                <Text color="gray" size={"1"}>
                                  <b>{`${letters[i]})`}</b>- {f}
                                </Text>
                              </Box>
                            ))}
                          </Grid>
                        </Flex>
                      )}
                      <TextArea
                        placeholder={
                          f.focus && f.focus.length > 0
                            ? f.focus.join(" \n")
                            : `Write ${f.name}`
                        }
                        value={f.value}
                        onChange={(e) => onChange(e, f.name)}
                        rows={5}
                        className="placeholder-orange-600"
                        role="textbox"
                      />
                    </Box>
                  ))}
                </Accordion.Content>
              </Accordion.Item>
            </Accordion.Root>
          </Card>
        </Flex>
      ))}
    </Box>
  );
};

export default AnecdotalNotes;
