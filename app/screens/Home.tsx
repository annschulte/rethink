import React, { useCallback, useMemo } from "react";
import { MainStackParamList } from "../types/navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import RealmContext, { Task } from "../models/Task";
import {
  Button,
  Center,
  Checkbox,
  Heading,
  TextArea,
  Text,
  VStack,
  Box,
  Tooltip,
  Container,
} from "native-base";
import { questionOfTheDay } from "../types/questions";
import { KeyboardAvoidingView, ScrollView } from "react-native";

export default function ({
  navigation,
}: NativeStackScreenProps<MainStackParamList, "MainTabs">) {
  const { useRealm, useQuery } = RealmContext;

  const taskRealm = useRealm();
  const taskResult = useQuery(Task);

  const tasks = useMemo(() => taskResult.sorted("createdAt"), [taskResult]);

  const handleAddTask = useCallback(
    (description: string): void => {
      if (!description) {
        return;
      }

      // Everything in the function passed to "realm.write" is a transaction and will
      // hence succeed or fail together. A transcation is the smallest unit of transfer
      // in Realm so we want to be mindful of how much we put into one single transaction
      // and split them up if appropriate (more commonly seen server side). Since clients
      // may occasionally be online during short time spans we want to increase the probability
      // of sync participants to successfully sync everything in the transaction, otherwise
      // no changes propagate and the transaction needs to start over when connectivity allows.
      taskRealm.write(() => {
        taskRealm.create("Task", Task.generate(description));
      });
    },
    [taskRealm]
  );

  const handleToggleTaskStatus = useCallback(
    (task: Task): void => {
      taskRealm.write(() => {
        // Normally when updating a record in a NoSQL or SQL database, we have to type
        // a statement that will later be interpreted and used as instructions for how
        // to update the record. But in RealmDB, the objects are "live" because they are
        // actually referencing the object's location in memory on the device (memory mapping).
        // So rather than typing a statement, we modify the object directly by changing
        // the property values. If the changes adhere to the schema, Realm will accept
        // this new version of the object and wherever this object is being referenced
        // locally will also see the changes "live".
        task.isComplete = !task.isComplete;
      });

      // Alternatively if passing the ID as the argument to handleToggleTaskStatus:
      // realm?.write(() => {
      //   const task = realm?.objectForPrimaryKey('Task', id); // If the ID is passed as an ObjectId
      //   const task = realm?.objectForPrimaryKey('Task', Realm.BSON.ObjectId(id));  // If the ID is passed as a string
      //   task.isComplete = !task.isComplete;
      // });
    },
    [taskRealm]
  );

  const handleDeleteTask = useCallback(
    (task: Task): void => {
      taskRealm.write(() => {
        taskRealm.delete(task);

        // Alternatively if passing the ID as the argument to handleDeleteTask:
        // realm?.delete(realm?.objectForPrimaryKey('Task', id));
      });
    },
    [taskRealm]
  );

  return (
    <ScrollView>
      <Heading pt={5} pl={5} fontSize="xl">
        Plexus
      </Heading>
      <Box m={10}>
        <Center>
          <Heading fontWeight="thin" textAlign="center" size="2xl">
            {questionOfTheDay}
          </Heading>
          <TextArea my={5} shadow={2} h="150px" w="90%" />
          <Tooltip
            label="This will hide all your personal information from your connection as well as their information."
            openDelay={200}
          >
            <Checkbox mb={5} value="true">
              Answer Annonamously
            </Checkbox>
          </Tooltip>

          <Button mb={5} width="100%">
            Submit
          </Button>
        </Center>
      </Box>
    </ScrollView>
  );
}
