import React from "react";
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
} from "@chakra-ui/react";

export default function Home() {
  let d = new Date();
  let month = d.toLocaleString("en-us", { month: "long" });

  return (
    <Box bgColor="#f8fbfa" h="100vh">
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container
        maxW="container.md"
        bgColor="white"
        padding="5"
        pb="40"
        borderRadius="10"
      >
        <Image src="/uoft.png" w="32" p="4" />
        <Container
          maxW="container.md"
          bgColor="#479e7a"
          color="white"
          borderRadius="5"
          padding="5"
          pb="1"
        >
          <Stack spacing="-1">
            <Stack direction="row" justify="space-between">
              <Stack spacing="0.5">
                <Heading fontSize="xl">Ming Yang Xu</Heading>
                <Text fontSize="sm">Last updated on</Text>
              </Stack>
              <Image src="/thumb.png" w="14" h="14" />
            </Stack>
            <Heading
              fontSize="xl"
              mt="0"
            >{`${month} ${d.getDate()}, ${d.getFullYear()} ${formatAMPM(
              d
            )}`}</Heading>
            <br />
            <Text style={{ lineHeight: "1.15" }} fontSize="sm">
              Based on your answers, you do not report symptoms of COVID-19 and
              can continue to come to campus as planned. Please continue to
              abide by all applicable public health requirements,
              <strong>
                remember to wear a mask, and abide by all University posted
                signage
              </strong>
              . You must ensure that your manager, supervisor, or University
              contact person has your up-to-date contact information prior to
              coming on site.
            </Text>
            <Text style={{ lineHeight: "1.15" }} fontSize="sm" pt="4">
              This self-assessment does not confirm a negative diagnosis of
              COVID-19.
            </Text>
            <Text style={{ lineHeight: "1.15" }} fontSize="sm" pt="4">
              If you are in an <u>at-risk group</u>, are receiving this 'green
              status' for the first time, and:
            </Text>
            <UnorderedList pl="10" spacing="2">
              <ListItem>
                <Text style={{ lineHeight: "1.15" }} fontSize="sm" pt="4">
                  You are a student, please contact your local health care
                  provider or campus Health & Wellness/Health & Counseling
                  Centre before you arrive on campus/leave your residence.
                </Text>
              </ListItem>
              <ListItem>
                <Text style={{ lineHeight: "1.15" }} fontSize="sm">
                  You are a Faculty, Librarian, or Staff member, and require an
                  alternative work arrangement or potential accommodation,
                  please contact <u>Health & Well-Being</u>.
                </Text>
              </ListItem>
            </UnorderedList>
            <br />
            <Stack
              direction="row"
              justify="space-between"
              align="center"
              py="2"
              px="1"
              borderTop="1px solid rgba(255,255,255)"
            >
              <Heading fontSize="xl">Recomendation</Heading>
              <ChevronDownIcon w={6} h={6} />
            </Stack>
          </Stack>
        </Container>
        <Stack
          align="center"
          border="2px solid #c4c4c4"
          borderRadius="8"
          p="3"
          mt="4"
        >
          <Heading fontSize="md" color="gray.700">
            New Self-Assessment
          </Heading>
        </Stack>
      </Container>
    </Box>
  );
}

function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  hours = hours < 10 ? "0" + hours : hours;
  var strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
}
