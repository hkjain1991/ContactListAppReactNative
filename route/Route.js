import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import FavoriteContact from '../screen/FavoriteContact/FavoriteContact';
import {createStackNavigator} from '@react-navigation/stack';
import ContactList from '../screen/ContactList/ContactList';
import AddOrUpdateContact from '../screen/AddOrUpdateContact/AddOrUpdateContact';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export const MyDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="contact" component={ContactList} />
      <Drawer.Screen name="favorite" component={FavoriteContact} />
    </Drawer.Navigator>
  );
};

export const ContactListNav = () => {
  return (
    <Stack.Navigator initialRouteName="Contact List">
      <Stack.Screen name="Contact List" component={MyDrawer} />
      <Stack.Screen name="Contact Update" component={AddOrUpdateContact} />
    </Stack.Navigator>
  );
};
