import React from "react";
import { useAuth } from "../providers/AuthProvider";

import { NavigationContainer } from "@react-navigation/native";

import Main from "./MainStack";
import Auth from "./AuthStack";

export default () => {
  const auth: any = useAuth();
  const user = auth.user;

  return (
    <NavigationContainer>
      {!user || user == null ? <Auth /> : null}
      {user ? <Main /> : null}
    </NavigationContainer>
  );
};
