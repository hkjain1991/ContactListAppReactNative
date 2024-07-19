import React, {useEffect} from 'react';
import {Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const AddOrUpdateContact = () => {
  const nav = useNavigation();

  useEffect(() => {
    nav.setOptions({title: 'Update Contact Details'});
  });
  return <Text>Add Page</Text>;
};

export default AddOrUpdateContact;
