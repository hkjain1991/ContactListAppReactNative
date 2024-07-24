import React from 'react';
import {Text, Image, View} from 'react-native';
import style from './style';

const ContactItem = ({item}) => {
  return (
    <View style={style.mainViewContainer}>
      {item.item.uri ? (
        <Image
          style={style.profileImage}
          source={{uri: item.item.uri}}
          defaultSource={require('../../assets/images/camera_icon.png')}
        />
      ) : (
        <View>
          <Text>{item.item.name.substr(0, 1)}</Text>
        </View>
      )}
      <Text style={style.nameText}>{item.item.name}</Text>
    </View>
  );
};

export default ContactItem;
