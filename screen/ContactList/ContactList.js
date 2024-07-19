import React from 'react';
import {Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const ContactList = () => {
  const nav = useNavigation();
  return (
    <Text
      onPress={() => {
        console.log('I am clicked');
        nav.navigate('Contact Update');
      }}>
      Contact Page
    </Text>
  );
};

export default ContactList;
