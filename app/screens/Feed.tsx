import React, { useState } from "react";
import { MainStackParamList } from "../types/navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  Box,
  HStack,
  Text,
  FlatList,
  Heading,
  Avatar,
  Spacer,
  Button,
  Image,
  VStack,
  Center,
} from "native-base";

const data = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    fullName: "Aafreen Khan",
    timeStamp: "12:47 PM",
    question: "Why would you want to live forever?",
    answer: "Lorem Ipsum, blah blah ablahbasd....",
    avatarUrl:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    fullName: "Sujitha Mathur",
    timeStamp: "11:11 PM",
    question: "Why would you want to live forever?",
    answer: "Lorem Ipsum, blah blah ablahbasd....",
    avatarUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    fullName: "Anci Barroco",
    timeStamp: "6:22 PM",
    question: "Why would you want to live forever?",
    answer: "Lorem Ipsum, blah blah ablahbasd....",
    avatarUrl: "https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg",
  },
  {
    id: "68694a0f-3da1-431f-bd56-142371e29d72",
    fullName: "Aniket Kumar",
    timeStamp: "8:56 PM",
    question: "Why would you want to live forever?",
    answer: "Lorem Ipsum, blah blah ablahbasd....",
    avatarUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU",
  },
  {
    id: "28694a0f-3da1-471f-bd96-142456e29d72",
    fullName: "Kiara",
    timeStamp: "12:47 PM",
    question: "Why would you want to live forever?",
    answer: "Lorem Ipsum, blah blah ablahbasd....",
    avatarUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU",
  },
];

const AllFeed = () => (
  <FlatList
    data={data}
    renderItem={({ item }) => (
      <Box
        borderBottomWidth="1"
        borderColor="coolGray.200"
        pl="4"
        pr="5"
        py="2"
      >
        <HStack space={3} justifyContent="space-between">
          <Image
            rounded="md"
            alt={item + "profile image"}
            size="48px"
            source={{
              uri: item.avatarUrl,
            }}
          />
          <VStack>
            <Text bold>{item.fullName}</Text>
            <Text color="coolGray.900" isTruncated maxW="225">
              {item.question}
            </Text>
            {/* <Text color="coolGray.500" isTruncated maxW="225">
              {item.answer}
            </Text> */}
          </VStack>
          <Spacer />
          <Text fontSize="xs" color="coolGray.800" alignSelf="flex-start">
            {item.timeStamp}
          </Text>
        </HStack>
      </Box>
    )}
    keyExtractor={(item) => item.id}
  />
);

export default function ({
  navigation,
}: NativeStackScreenProps<MainStackParamList, "MainTabs">) {
  const [value, setValue] = React.useState("All");

  return (
    <Box>
      <Heading pt={5} pl={5} fontSize="xl">
        Feed
      </Heading>
      <Box m={5}>
        <Center>
          <Button.Group isAttached size="md">
            <Button
              width={20}
              onPress={() => setValue("All")}
              variant={value === "Personal" ? "outline" : "solid"}
            >
              All
            </Button>
            <Button
              onPress={() => setValue("Personal")}
              variant={value === "All" ? "outline" : "solid"}
            >
              Personal
            </Button>
          </Button.Group>
        </Center>
      </Box>
      {value === "All" ? <AllFeed /> : <AllFeed />}
    </Box>
  );
}
