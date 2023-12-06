import { View, Text } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';

export default function CourseDetailScreen() {
  const navigate=useNavigation();
  return (
    <View style={{padding:20,}}>
    <TouchableOpacity onPress={() => navigate.goBack()}>
   <Ionicons name="chevron-back" size={40} color="black" /> 
   </TouchableOpacity>
  
  </View>
  )
}