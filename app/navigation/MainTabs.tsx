import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Groups from "../screens/Groups";
import Feed from "../screens/Feed";
import Profile from "../screens/Profile";
import { Text, Icon } from "native-base";
import { AntDesign, Ionicons, Feather } from "@expo/vector-icons";

const Tabs = createBottomTabNavigator();

const MainTabs = () => {
  return (
    <Tabs.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          borderTopColor: "black",
          backgroundColor: "white",
        },
      }}
    >
      <Tabs.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabBarText focused={focused} title="Home" />
          ),
          tabBarIcon: ({ focused }) => (
            <TabIcon type={AntDesign} focused={focused} title="home" />
          ),
        }}
      />
      {/* <Tabs.Screen
        name="Groups"
        component={Groups}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabBarText focused={focused} title="Groups" />
          ),
          tabBarIcon: ({ focused }) => (
            <TabIcon type={Ionicons} focused={focused} title="people-outline" />
          ),
        }}
      /> */}
      <Tabs.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabBarText focused={focused} title="Feed" />
          ),
          tabBarIcon: ({ focused }) => (
            <TabIcon type={Feather} focused={focused} title="list" />
          ),
        }}
      />

      <Tabs.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: ({ focused }) => (
            <TabBarText focused={focused} title="Profile" />
          ),
          tabBarIcon: ({ focused }) => (
            <TabIcon type={Feather} focused={focused} title="settings" />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

const TabBarText = ({
  title,
  focused,
}: {
  title: string;
  focused: boolean;
}) => (
  <Text mb={-6} color={focused ? "indigo.500" : "gray.600"} fontSize={10}>
    {title}
  </Text>
);

const TabIcon = ({
  title,
  focused,
  type,
}: {
  title: string;
  focused: boolean;
  type: any;
}) => (
  <Icon
    as={type}
    name={title}
    size="5"
    mb="-7"
    color={focused ? "indigo.500" : "gray.600"}
  />
);

export default MainTabs;
