import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {RouteHelper} from '../../route/RouteHelper';
import style from './style';
import {SwipeListView} from 'react-native-swipe-list-view';
import {
  createTable,
  getAllContacts,
  getDbOpenConnection,
  insertDataIntoTable,
} from '../../database/DbService';
import ContactItem from '../../components/ContactItem/ContactItem';

const ContactList = ({route}) => {
  const listView = useRef(null);
  const nav = useNavigation();
  // const arr = Array(20)
  //   .fill('')
  //   .map((_, i) => ({key: `${i}`, text: `item #${i}`}));
  const [data2, setData] = useState([]);
  //const showSwipeView = useRef(true);
  // const [data, setData] = useState([]);

  const getDataFromDb = useCallback(async () => {
    const db = await getDbOpenConnection();
    await createTable(db);
    return await getAllContacts(db);
    // res.map(value => {
    //   console.log(value);
    // });
    // console.log(listView.current);
    // return await Array(20)
    //   .fill('')
    //   .map((_, i) => ({key: `${i}`, text: `item #${i}`}));
  }, []);

  useEffect(() => {
    getDataFromDb().then(data1 => {
      data1.map(value => {
        console.log(value);
      });
      setData(data1);
    });
  }, []);

  const editPage = () => {
    listView.current?.closeAllOpenRows();
    console.log('left is clicked');
    nav.navigate(RouteHelper.AddOrUpdateContact, {
      name: 'Update Contact Details',
    });
    // setData();
  };
  return (
    <SwipeListView
      keyExtractor={item => item.id}
      ref={listView}
      data={data2}
      renderItem={(data3, rowMap) => (
        <View style={{backgroundColor: 'black'}}>
          <ContactItem item={data3} />
        </View>
      )}
      renderHiddenItem={(data, rowMap) => (
        <RowHiddenItem data={data} rowMap={rowMap} editPage={editPage} />
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

const RowHiddenItem = ({data, rowMap, editPage}) => {
  return (
    <View style={{backgroundColor: 'red'}}>
      <Text
        onPress={() => {
          editPage();
        }}>
        Left
      </Text>
      {/* <Text>Right</Text> */}
    </View>
  );
};

export default ContactList;
