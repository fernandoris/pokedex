import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import AccountNavigation from './AccountNavigation';
import FavoriteNavigation from './FavoriteNavigation';
import PokedexNavigation from './PokedexNavigation';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name='AccountTab'
        component={AccountNavigation}
        options={{
          tabBarLabel: "Cuenta",
          tabBarIcon: ({ color, size }) => (<Icon name='user' color={color} size={size} />)
        }} />
      <Tab.Screen
        name='PokedexTab'
        component={PokedexNavigation}
        options={{
          tabBarLabel: "",
          tabBarIcon: () => renderPokeball()
        }} />
      <Tab.Screen
        name='FavoriteTab'
        component={FavoriteNavigation}
        options={{
          tabBarLabel: "Favoritos",
          tabBarIcon: ({ color, size }) => (<Icon name='heart' color={color} size={size} />)
        }} />

    </Tab.Navigator>
  )
}

function renderPokeball() {
  return (
    <Image
      source={require('../assets/pokeball.png')}
      style={{ width: 60, height: 60, top: -18 }}
    />
  )
}