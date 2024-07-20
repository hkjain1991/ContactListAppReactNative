import React from 'react';
import {Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {RouteHelper} from '../../route/RouteHelper';
import style from './style';

const ContactList = () => {
  const nav = useNavigation();
  return (
    <Text
      onPress={() => {
        console.log('I am clicked');
        nav.navigate(RouteHelper.AddOrUpdateContact, {
          name: 'Update Contact Details',
        });
      }}>
      Contact Page
    </Text>
  );
};

export default ContactList;
