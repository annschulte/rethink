import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Connection from "../screens/Connection";
import ProfileView from "../screens/ProfileView";
import Group from "../screens/Group";
import MainTabs from "./MainTabs";
import { MainStackParamList } from "../types/navigation";

const MainStack = createNativeStackNavigator<MainStackParamList>();
const Main = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <MainStack.Screen name="MainTabs" component={MainTabs} />
      <MainStack.Screen name="Connection" component={Connection} />
      <MainStack.Screen name="ProfileView" component={ProfileView} />
      <MainStack.Screen name="Group" component={Group} />
    </MainStack.Navigator>
  );
};

export default Main;
