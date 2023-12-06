import { useEffect } from 'react'; // Import useEffect

import { View, Text } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation,useRoute } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import DetailSection from '../Components/CourseDetailScreen/DetailSection';

export default function CourseDetailScreen() {
  const navigate=useNavigation();
  const params=useRoute().params;
  useEffect(()=>{
    console.log(params.course)
  },[params.course])
  return (
    <View style={{padding:20,}}>
    <TouchableOpacity onPress={() => navigate.goBack()}>
   <Ionicons name="chevron-back" size={40} color="black" /> 
   <DetailSection/>
   </TouchableOpacity>
  
  </View>
  )
}