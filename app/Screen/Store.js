import React from 'react';
import { View, TextInput, ScrollView } from 'react-native';
import Header from '../Components/HomeScreen/Header';
import { useUser } from '@clerk/clerk-expo';
import { FontAwesome5 } from '@expo/vector-icons';
import CourseList from '../Components/HomeScreen/CourseList';
import KitList from '../Components/HomeScreen/KitList'; // Import KitList component

export default function Store() {
  const { user } = useUser();

  return (
    <ScrollView style={{ flex: 1 }}>
      <View>
        <Header user={user} />
        <View style={{ flexDirection: 'row', paddingHorizontal: 20, paddingVertical: 10, backgroundColor: 'rgba(217,249,208,0.5)', borderRadius: 15, alignItems: 'center' }}>
          <TextInput placeholder='Search input' style={{ flex: 1, height: 40, borderRadius: 15, backgroundColor: 'white', paddingLeft: 10, marginRight: 10 }} />
          <FontAwesome5 name="search" size={24} color="grey" />
        </View>

        {/* Display CourseList */}
        <View style={{ padding: 20 }}>
          <CourseList courseLevel='Advance' />
        </View>

        {/* Display KitList */}
        <View style={{ padding: 20 }}>
          <KitList />
        </View>
      </View>
    </ScrollView>
  );
}
