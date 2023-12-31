import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { GestureHandlerRootView, FlatList } from 'react-native-gesture-handler';
import { getKitList } from '../../Services';
import SubHeading from './SubHeading';
import { Entypo, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function KitList() {
  const [kitList, setKitList] = useState([]);
  const navigation = useNavigation(); // Add this line to use the navigation hook

  useEffect(() => {
    getKits();
  }, []);

  const getKits = () => {
    getKitList().then(resp => {
      console.log("RESP-", resp);
      setKitList(resp?.kits);
    });
  };

  return (
    <GestureHandlerRootView>
      <View>
        <SubHeading text={'Kits'} />
        <FlatList
          data={kitList}
          keyExtractor={(item) => item.name}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate('kit-detail', { kitId: item.id })}>
              <View style={{
                padding: 10,
                backgroundColor: 'orange',
                marginRight: 15,
                borderRadius: 15
              }}>
                <Image source={{ uri: item?.image[0].url }}
                  style={{ width: 210, height: 120, borderRadius: 15 }} />
                <View style={{ padding: 7 }}>
                  <Text style={{ fontSize: 15 }}>
                    {item.name}
                  </Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                  <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 5, marginTop: 5 }}>
                    <Entypo name="open-book" size={24} color="black" />
                    <Text>{item.grade}</Text>
                  </View>
                  <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 5, marginTop: 5 }}>
                    <Feather name="dollar-sign" size={24} color="black" />
                    <Text>{item.price}</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </GestureHandlerRootView>
  );
}
