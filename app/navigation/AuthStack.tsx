import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../screens/auth/Login";
import ForgetPassword from "../screens/auth/ForgetPassword";
import { AuthStackParamList } from "../types/navigation";

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

const Auth = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Login"
    >
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="ForgetPassword" component={ForgetPassword} />
    </AuthStack.Navigator>
  );
};

export default Auth;
