import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import{ClerkProvider,SignedIn, SignedOut} from"@clerk/clerk-expo";
import Login from './app/pages/Login';

export default function App() {
  return (
    <ClerkProvider publishableKey={"pk_test_YWxpdmUtaHllbmEtNzIuY2xlcmsuYWNjb3VudHMuZGV2JA"}>
    <View style={styles.container}>
      
      <SignedIn>
          <Text>You are Signed in</Text>
        </SignedIn>
        <SignedOut>
        <Login />
        </SignedOut>
      <StatusBar style="auto" />
    </View>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
