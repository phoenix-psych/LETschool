import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';

import HomeScreen from '../Screen/HomeScreen';
import Account from '../Screen/Account';
import MyCourse from '../Screen/MyCourse';
import Store from '../Screen/Store';
import Wishlist from '../Screen/Wishlist';

const Tab = createBottomTabNavigator();

const CustomTabBar = ({ state, descriptors, navigation }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: 'rgba(68, 225, 21, 0.5)', // Green color with 50% opacity
        borderTopLeftRadius: 10, // Adjust the radius to control the curve
        borderTopRightRadius: 10,
        overflow: 'hidden',
      }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const iconColor = isFocused ? 'black' : 'rgba(217,249,208,0.5)';
        const labelColor = isFocused ? 'black' : 'rgba(217,249,208,0.5)';
        const labelSize = isFocused ? 14 : 12;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={{ flex: 1, alignItems: 'center', padding: 16 }}
          >
            {options.tabBarIcon({ color: iconColor, size: 24 })}
            <Text style={{ color: labelColor, marginTop: 5, fontSize: 8 }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default function TabNavigations() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBarOptions={{
        activeTintColor: 'blue',
        tabBarStyle: { backgroundColor: 'transparent' }, // Set background color to transparent
      }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='MyCourse'
        component={MyCourse}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="graduation-cap" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Store'
        component={Store}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="store" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Wishlist'
        component={Wishlist}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="heart" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Account'
        component={Account}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
