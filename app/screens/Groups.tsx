import React from "react";
import { MainStackParamList } from "../../types/navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Center, Text } from "native-base";

export default function ({
  navigation,
}: NativeStackScreenProps<MainStackParamList, "MainTabs">) {
  return (
    <Center height="100%">
      <Text>This is the Groups tab</Text>
    </Center>
  );
}
