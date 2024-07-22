import React, {useState} from 'react';
import style from './style';
import {SwipeListView} from 'react-native-swipe-list-view';
import {Text, View} from 'react-native';

const ContactListItem = () => {
  const arr = Array(20)
    .fill('')
    .map((_, i) => ({key: `${i}`, text: `item #${i}`}));
  const [data, setData] = useState(arr);

  return (
    <SwipeListView
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
              console.log('left is clicked');
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
};

export default ContactListItem;
