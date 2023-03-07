import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { NativeBaseProvider } from "native-base";
import RealmContext from "./app/models/Task";
import { StatusBar } from "expo-status-bar";
import Navigation from "./app/navigation";
import { AuthProvider } from "./app/providers/AuthProvider";
import { AppProvider } from "./app/providers/AppProvider";
import {
  useFonts,
  Mulish_400Regular,
  Mulish_300Light,
  Mulish_200ExtraLight,
  Mulish_700Bold,
} from "@expo-google-fonts/mulish";
import Loading from "./app/screens/utils/Loading";
import { theme } from "./assets/theme";

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

function AppWrapper() {
  const { RealmProvider } = RealmContext;
  const [fontsLoaded] = useFonts({
    Mulish_400Regular,
    Mulish_300Light,
    Mulish_200ExtraLight,
    Mulish_700Bold,
  });

  if (!fontsLoaded) {
    return <Loading />;
  }
  return (
    <AppProvider id={"plexus-mobile-realm-zrejq"}>
      <RealmProvider>
        <NativeBaseProvider theme={theme}>
          <SafeAreaView style={styles.screen}>
            <AuthProvider>
              <Navigation />
            </AuthProvider>
            <StatusBar />
          </SafeAreaView>
        </NativeBaseProvider>
      </RealmProvider>
    </AppProvider>
  );
}

export default AppWrapper;
