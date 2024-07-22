import React, {useRef, useState} from 'react';
import {Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {RouteHelper} from '../../route/RouteHelper';
import style from './style';
import {SwipeListView} from 'react-native-swipe-list-view';

const ContactList = () => {
  const listView = useRef(null);
  const nav = useNavigation();
  const arr = Array(20)
    .fill('')
    .map((_, i) => ({key: `${i}`, text: `item #${i}`}));
  const [data, setData] = useState(arr);
  const showSwipeView = useRef(true);

  return (
    <SwipeListView
      ref={listView}
      data={data}
      renderItem={(data, rowMap) => (
        <View style={{backgroundColor: 'black'}}>
          <Text>I am {data.item.text} in a SwipeListView</Text>
        </View>
      )}
      renderHiddenItem={(data, rowMap) => (
        <View style={{backgroundColor: 'red'}}>
          <Text
            onPress={() => {
              listView.current.closeAllOpenRows();
              console.log('left is clicked');
              nav.navigate(RouteHelper.AddOrUpdateContact, {
                name: 'Update Contact Details',
              });
            }}>
            Left
          </Text>
          {/* <Text>Right</Text> */}
        </View>
      )}
      leftOpenValue={75}
      rightOpenValue={0}
      disableLeftSwipe={true}
    />
  );

  // return (
  //   <Text
  //     onPress={() => {
  //       console.log('I am clicked');
  //       nav.navigate(RouteHelper.AddOrUpdateContact, {
  //         name: 'Update Contact Details',
  //       });
  //     }}>
  //     Contact Page
  //   </Text>
  // );
};

export default ContactList;
