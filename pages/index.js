import React, { useState } from "react";
import Head from "next/head";
import { ChevronDownIcon } from "@chakra-ui/icons";

import {
  Container,
  Stack,
  Box,
  Image,
  Text,
  Heading,
  UnorderedList,
  ListItem,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  RadioGroup,
  Radio,
} from "@chakra-ui/react";

import UCheck from "./ucheck.js";

export default function Home() {
  const [name, setName] = useState("Ming Yang Xu");
  const [confirm, setConfirm] = useState(false);
  console.log(confirm);
  if (!confirm) {
    return (
      <Container p="12">
        <Head>
          <title>My Thrive Home</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Stack spacing="8">
          <RadioGroup onChange={setName} defaultValue="Ming Yang Xu">
            <Stack spacing="8">
              <Radio value="Ming Yang Xu">Kev</Radio>
              <Radio value="Emily Ran Wen">Emily</Radio>
            </Stack>
          </RadioGroup>
          <Button onClick={(_) => setConfirm(!confirm)}>Confirm</Button>
        </Stack>
      </Container>
    );
  } else {
    return <UCheck name={name} />;
  }
}
