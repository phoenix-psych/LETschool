import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import{ClerkProvider,SignedIn, SignedOut} from"@clerk/clerk-expo";
import Login from './app/pages/Login';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigations from './app/Navigations/TabNavigations';

export default function App() {
  return (
    <ClerkProvider publishableKey={"pk_test_YWxpdmUtaHllbmEtNzIuY2xlcmsuYWNjb3VudHMuZGV2JA"}>
    <View style={styles.container}>
      
      <SignedIn>     
          <NavigationContainer>
            <Text>hiiii</Text>
            <TabNavigations/>
          </NavigationContainer>
        </SignedIn>
        <SignedOut>
        <Login />
        </SignedOut>
      {/* <StatusBar style="auto" /> */}
    </View>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});
