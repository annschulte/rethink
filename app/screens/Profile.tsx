import React from "react";
import { MainStackParamList } from "../types/navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  Box,
  Button,
  Center,
  Heading,
  HStack,
  Image,
  Input,
  Spacer,
  Text,
  TextArea,
  VStack,
  ScrollView,
} from "native-base";
import { useAuth } from "../providers/AuthProvider";

export default function ({
  navigation,
}: NativeStackScreenProps<MainStackParamList, "MainTabs">) {
  const auth = useAuth();
  const [value, setValue] = React.useState("PersonalFeed");

  const logout = () => {
    auth.signOut();
  };

  return (
    <ScrollView>
      <Heading pt={5} pl={5} fontSize="xl">
        Profile
      </Heading>
      <Box height="100%" m={10}>
        <Center>
          <Image
            rounded="md"
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT41e_yzRfpEOhRJ84n1tkVFBte88YNoSxNgA&usqp=CAU",
            }}
            alt="Alternate Text"
            size="xl"
            pb={5}
          />
          <Text fontSize="lg">John Smith</Text>
          <Text pb={5} fontSize="md" color="coolGray.500">
            Omaha, NE
          </Text>
        </Center>

        <Input p={3} mb={5} size="xl" placeholder="First Name" />
        <Input p={3} mb={5} size="xl" placeholder="Last Name" />
        <Input
          p={3}
          mb={5}
          size="xl"
          placeholder="Current Password"
          autoCapitalize="none"
          autoCompleteType="off"
          autoCorrect={false}
          secureTextEntry={true}
        />
        <Input
          p={3}
          mb={5}
          size="xl"
          placeholder="New Password"
          autoCapitalize="none"
          autoCompleteType="off"
          autoCorrect={false}
          secureTextEntry={true}
          isDisabled={true}
        />
        <Input
          p={3}
          mb={5}
          size="xl"
          placeholder="Re New Enter Password"
          autoCapitalize="none"
          autoCompleteType="off"
          autoCorrect={false}
          secureTextEntry={true}
          isDisabled={true}
        />
        <TextArea mb={5} h="150px" placeholder="About me" />

        <Button mb={5}>Save Profile</Button>
        <Button mb={3} variant="outline" onPress={logout}>
          Log Out
        </Button>
        <Button colorScheme="red" variant="ghost" onPress={() => null}>
          Delete Account
        </Button>
      </Box>
    </ScrollView>
  );
}
