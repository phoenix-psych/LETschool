import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screen/HomeScreen';
import Account from '../Screen/Account';
import MyCourse from '../Screen/MyCourse';
import Store from '../Screen/Store';
import Wishlist from '../Screen/Wishlist';

const Tab = createBottomTabNavigator();

export default function TabNavigations() {
  return (
    <Tab.Navigator>
        <Tab.Screen name='Home' component={HomeScreen} />
      <Tab.Screen name='Account' component={Account} />
      <Tab.Screen name='MyCourse' component={MyCourse} />
      <Tab.Screen name='Store' component={Store} />
      <Tab.Screen name='Wishlist' component={Wishlist} />
    </Tab.Navigator>
  )
}