import React, { useState } from "react";
import {
  ScrollView,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Pressable,
  TextInput,
  useColorScheme,
} from "react-native";
import { Text } from "native-base";
import { AuthStackParamList } from "../../types/navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export default function ({
  navigation,
}: NativeStackScreenProps<AuthStackParamList, "ForgetPassword">) {
  const isDarkMode = useColorScheme() === "dark";
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  async function forget() {
    setLoading(true);
    // if (!error) {
    //   setLoading(false);
    //   alert("Check your email to reset your password!");
    // }
    // if (error) {
    //   setLoading(false);
    //   alert(error.message);
    // }
  }
  return (
    <KeyboardAvoidingView behavior="height" enabled style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
      >
        <View>
          <View>
            <Text>Forget Password</Text>
            <Text>Email</Text>
            <TextInput
              placeholder="Enter your email"
              value={email}
              autoCapitalize="none"
              autoCompleteType="off"
              autoCorrect={false}
              keyboardType="email-address"
              onChangeText={(text) => setEmail(text)}
            />
            <Pressable onPress={forget}>
              <Text>{loading ? "Loading" : "Send email"}</Text>
            </Pressable>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 30,
                justifyContent: "center",
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  // isDarkMode ? setTheme("light") : setTheme("dark");
                }}
              >
                <Text>{!isDarkMode ? "☀️ light theme" : "🌑 dark theme"}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
