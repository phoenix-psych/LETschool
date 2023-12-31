import { GestureHandlerRootView } from 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { getCourseList } from '../../Services';
import SubHeading from './SubHeading';
import { FlatList } from 'react-native-gesture-handler';
import { Entypo, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function CourseList({ courseLevel }) {
  const [CourseList, setCourseList] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    getCourses();
  }, []);

  const getCourses = () => {
    getCourseList(courseLevel).then(resp => {
      console.log("RESP-", resp);
      setCourseList(resp?.courses);
    });
  };

  return (
    <GestureHandlerRootView>
      <View>
        <SubHeading text={'Courses'} />
        <FlatList
          data={CourseList}
          keyExtractor={(item) => item.id.toString()}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity 
            onPress={() => navigation.navigate('course-detail',
           {
             course:item
          })}>
              
              
              
              <View style={{
                padding: 10,
                backgroundColor: 'green',
                marginRight: 15,
                borderRadius: 15
              }}>
                <Image source={{ uri: item?.banner?.url }}
                  style={{ width: 210, height: 120, borderRadius: 15 }} />
                <View style={{ padding: 7 }}>
                  <Text style={{ fontSize: 15 }}>
                    {item.name}
                  </Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                  <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 5, marginTop: 5 }}>
                    <Entypo name="open-book" size={24} color="black" />
                    <Text>{item?.chapter?.length} Streams</Text>
                  </View>
                  <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 5, marginTop: 5 }}>
                    <Feather name="clock" size={24} color="black" />
                    <Text>{item?.time} </Text>
                  </View>
                </View>
                <View>
                  <Text style={{ marginTop: 5, color: 'blue' }}>
                    {item?.price == 0 ? 'free' : item.price}
                  </Text>
                </View>
              </View>





            </TouchableOpacity>
          )}
        />
      </View>
    </GestureHandlerRootView>
  );
}
