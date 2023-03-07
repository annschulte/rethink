import React, { useEffect, useState } from "react";
import { KeyboardAvoidingView, ScrollView } from "react-native";
import {
  Container,
  Text,
  Heading,
  Input,
  Box,
  Button,
  HStack,
  TextArea,
} from "native-base";
import { AuthStackParamList, MainTabsParamList } from "../../types/navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useAuth } from "../../providers/AuthProvider";

export default function ({
  navigation,
}: NativeStackScreenProps<AuthStackParamList & MainTabsParamList, "Login">) {
  const auth = useAuth();
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [email, setEmail] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  async function signIn() {
    auth.signIn(email, password);
  }

  const onPressSignUp = async () => {
    try {
      setLoading(true);
      auth.signUp(email, password);
      await signIn();
    } catch (error: any) {
      alert(`Failed to sign up: ${error.message}`);
    }
    setLoading(false);
  };

  const onPressSignIn = async () => {
    try {
      setLoading(true);
      await signIn();
    } catch (error: any) {
      alert(error.message);
    }
    setLoading(false);
  };

  const addUserData = async () => {
    await auth.user.functions.addUserData({
      firstname: firstName,
      lastname: lastName,
      location: location,
    });
  };

  useEffect(() => {
    if (auth.user) {
      addUserData();
      navigation.navigate("Home");
    }
  }, [auth.user, navigation]);

  return isSignUpMode ? (
    <KeyboardAvoidingView behavior="height" enabled style={{ flex: 1 }}>
      <ScrollView>
        <Box m={10}>
          <Heading size="xl" pt={10} color="indigo.700">
            Let’s sign you up.
          </Heading>
          <Heading size="xl">We are excited you are here!</Heading>
          <Box width="100%" pt={8}>
            <Input
              p={3}
              mb={5}
              onChangeText={setFirstName}
              size="xl"
              placeholder="First Name"
              value={firstName}
            />
            <Input
              p={3}
              mb={5}
              onChangeText={setLastName}
              size="xl"
              placeholder="Last Name"
              value={lastName}
            />
            <Input
              p={3}
              mb={5}
              onChangeText={setEmail}
              size="xl"
              placeholder="Email"
              value={email}
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
            />
            <Input
              p={3}
              mb={5}
              size="xl"
              placeholder="Password"
              value={password}
              autoCapitalize="none"
              autoCompleteType="off"
              autoCorrect={false}
              secureTextEntry={true}
              onChangeText={setPassword}
            />
            <Input
              p={3}
              mb={5}
              size="xl"
              placeholder="Re Enter Password"
              autoCapitalize="none"
              autoCompleteType="off"
              autoCorrect={false}
              secureTextEntry={true}
            />
          </Box>
          <TextArea mb={5} h="150px" placeholder="About me" />
          <Button
            mb={5}
            background="black"
            width="100%"
            disabled={loading}
            onPress={onPressSignUp}
            isLoading={loading}
          >
            Create Account
          </Button>
          <Box width="100%">
            <HStack space={1} justifyContent="center">
              <Text>Already have an account?</Text>
              <Button
                p={0}
                variant="ghost"
                onPress={() => setIsSignUpMode(!isSignUpMode)}
              >
                Go to Login
              </Button>
            </HStack>
          </Box>
        </Box>
      </ScrollView>
    </KeyboardAvoidingView>
  ) : (
    <KeyboardAvoidingView behavior="height" enabled style={{ flex: 1 }}>
      <ScrollView>
        <Box m={10}>
          <Heading size="xl" pt={10} color="indigo.700">
            Let’s sign you in.
          </Heading>
          <Heading size="xl">You’ve been missed!</Heading>
          <Box width="100%" pt={24}>
            <Input
              p={3}
              mb={5}
              onChangeText={setEmail}
              size="xl"
              placeholder="Email"
              value={email}
              autoCapitalize="none"
              autoCompleteType="off"
              autoCorrect={false}
              keyboardType="email-address"
            />
            <Input
              p={3}
              mb={5}
              size="xl"
              placeholder="Password"
              value={password}
              autoCapitalize="none"
              autoCompleteType="off"
              autoCorrect={false}
              secureTextEntry={true}
              onChangeText={setPassword}
            />
          </Box>
          <Box width="100%">
            <Button
              mb={5}
              background="black"
              width="100%"
              onPress={onPressSignIn}
              disabled={loading}
            >
              {loading ? "Loading" : "Login"}
            </Button>

            <Box width="100%">
              <HStack space={1} justifyContent="center">
                <Text>Don't have an account?</Text>
                <Button
                  p={0}
                  variant="ghost"
                  onPress={() => setIsSignUpMode(!isSignUpMode)}
                >
                  Sign up
                </Button>
              </HStack>
            </Box>
            {/* <Button
              mb={5}
              variant="ghost"
              width="100%"
              onPress={() => {
                navigation.navigate("ForgetPassword");
              }}
            >
              Forgot password
            </Button> */}
          </Box>
        </Box>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
