
import { View, Text } from 'react-native';
import React from 'react';
import Header from '../Components/HomeScreen/Header';
import { useUser } from '@clerk/clerk-expo';

export default function Account() {
  const { user } = useUser();

  return (
    <View>
      <Header user={user} />
     
    </View>
  );
}
