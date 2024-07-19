import React from 'react';
import {Text} from 'react-native';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {RouteHelper} from '../../route/RouteHelper';

const ContactList = () => {
  const nav = useNavigation();

  useFocusEffect(
    React.useCallback(() => {
      nav.setOptions({title: 'Contact List'});
    }, []),
  );
  return (
    <Text
      onPress={() => {
        console.log('I am clicked');
        nav.navigate(RouteHelper.AddOrUpdateContact);
      }}>
      Contact Page
    </Text>
  );
};

export default ContactList;
