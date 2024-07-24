import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import FavoriteContact from '../screen/FavoriteContact/FavoriteContact';
import {createStackNavigator} from '@react-navigation/stack';
import ContactList from '../screen/ContactList/ContactList';
import AddOrUpdateContact from '../screen/AddOrUpdateContact/AddOrUpdateContact';
import {RouteHelper} from './RouteHelper';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export const MyDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name={RouteHelper.ContactList}
        component={ContactList}
        options={{
          title: 'Contact List',
        }}
      />
      <Drawer.Screen
        name={RouteHelper.FavoriteContactList}
        component={FavoriteContact}
        options={{
          title: 'Favorite Contact List',
        }}
      />
    </Drawer.Navigator>
  );
};

export const ContactListNav = () => {
  return (
    <Stack.Navigator initialRouteName="Contact List">
      <Stack.Screen
        name={RouteHelper.ContactStackScreen}
        component={MyDrawer}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={RouteHelper.AddOrUpdateContact}
        component={AddOrUpdateContact}
        options={({route}) => ({
          headerShown: true,
          title: route.params.title,
        })}
      />
    </Stack.Navigator>
  );
};
