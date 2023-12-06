import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Store from '../Screen/Store';
import CourseDetailScreen from '../Screen/CourseDetailScreen';
import KitDetailScreen from '../Screen/KitDetailScreen';

const Stack=createStackNavigator();
export default function StoreScreenNavigation() {
  return (
   
   <Stack.Navigator screenOptions={{headerShown:false}}>
    <Stack.Screen name='Store' component={Store}/>
    <Stack.Screen name='course-detail' component={CourseDetailScreen}/>
    <Stack.Screen name='kit-detail' component={KitDetailScreen}/>
   </Stack.Navigator>
  )
}