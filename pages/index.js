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
  Divider,
} from "@chakra-ui/react";

const Home = () => (
  <Box bgColor="#f8fbfa" h="100vh">
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Container
      maxW="container.md"
      bgColor="white"
      padding="5"
      borderRadius="10"
    >
      <Image src="/uoft.png" w="80" p="4" />
      <Container
        maxW="container.md"
        bgColor="#479e7a"
        color="white"
        borderRadius="10"
        padding="5"
      >
        <Stack spacing="2">
          <Stack direction="row" justify="space-between">
            <Box>
              <Heading fontSize="3xl">Ming Yang Xu</Heading>
              <Text fontSize="lg">Last updated on</Text>
              <Heading fontSize="3xl">October 3, 2021 05:24 PM</Heading>
            </Box>
            <Image src="/thumb.png" w="20" h="20" />
          </Stack>
          <br />
          <Text fontSize="lg" style={{ lineHeight: "1.15" }}>
            Based on your answers, you do not report symptoms of COVID-19 and
            can continue to come to campus as planned. Please continue to abide
            by all applicable public health requirements,
            <strong>
              remember to wear a mask, and abide by all University posted
              signage
            </strong>
            . You must ensure that your manager, supervisor, or University
            contact person has your up-to-date contact information prior to
            coming on site.
          </Text>
          <Text fontSize="lg">
            This self-assessment does not confirm a negative diagnosis of
            COVID-19.
          </Text>
          <Text fontSize="lg">
            If you are in an <u>at-risk group</u>, are receiving this 'green
            status' for the first time, and:
          </Text>
          <UnorderedList pl="10" spacing="2">
            <ListItem>
              <Text fontSize="lg" style={{ lineHeight: "1.15" }}>
                You are a student, please contact your local health care
                provider or campus Health & Wellness/Health & Counseling Centre
                before you arrive on campus/leave your residence.
              </Text>
            </ListItem>
            <ListItem>
              <Text fontSize="lg" style={{ lineHeight: "1.15" }}>
                You are a Faculty, Librarian, or Staff member, and require an
                alternative work arrangement or potential accommodation, please
                contact <u>Health & Well-Being</u>.
              </Text>
            </ListItem>
          </UnorderedList>
          <br />
          <Divider size="xl" />
          <Stack direction="row" justify="space-between" align="center" px="4">
            <Heading fontSize="2xl">Reccomendation</Heading>
            <ChevronDownIcon w={8} h={8} />
          </Stack>
        </Stack>
      </Container>
    </Container>
  </Box>
);

export default Home;
