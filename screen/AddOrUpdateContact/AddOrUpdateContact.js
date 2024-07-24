import React, {useState} from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Pressable,
  Alert,
  Keyboard,
} from 'react-native';
import style from './style';
import * as ImagePicker from 'react-native-image-picker';
import {
  getDbOpenConnection,
  insertDataIntoTable,
} from '../../database/DbService';
import {useNavigation} from '@react-navigation/native';
import {RouteHelper} from '../../route/RouteHelper';

const AddOrUpdateContact = ({route}) => {
  console.log(route.params.btnTitle);
  const [Name, setName] = useState(route.params?.name);
  const [Mobile, setMobile] = useState(route.params?.mobile);
  const [LandLine, setLandLine] = useState(route.params?.landline);
  const [uri, setUri] = useState(route.params?.uri);
  const nav = useNavigation();
  const options = {
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };

  const saveDataInDb = async () => {
    const db = await getDbOpenConnection();
    await insertDataIntoTable(
      db,
      Name.trim(),
      Mobile.trim(),
      LandLine ? LandLine : null,
      uri ? uri : null,
    );
    nav.goBack();
  };

  return (
    <View>
      <View style={style.inputViewContainer}>
        <Text style={style.ImageLabel}>
          Select Image Using Camera Or Image Picker?
        </Text>
        <Pressable
          onPress={() => {
            ImagePicker.launchCamera(options, response => {
              if (response?.assets?.length > 0) {
                setUri(response?.assets[0].uri);
              } else {
                Alert.alert('You discarded clicked Image.');
                setUri(undefined);
              }
            });
          }}>
          <Image
            source={require('../../assets/images/camera_icon.png')}
            style={style.ImageStyle}
          />
        </Pressable>
        <Pressable
          onPress={() => {
            ImagePicker.launchImageLibrary(null, response => {
              if (response?.assets?.length > 0) {
                setUri(response?.assets[0].uri);
              } else {
                Alert.alert('You discarded the selected Image.');
                setUri(undefined);
              }
            });
          }}
          style={style.PressabbleImageLibrary}>
          <Image
            source={require('../../assets/images/gallery.png')}
            style={style.ImageStyle}
          />
        </Pressable>
      </View>
      <View style={style.inputViewContainer}>
        {uri ? (
          <>
            <Text style={style.ImageLabel}>Selected Image:</Text>
            <Image style={style.capturedImage} source={{uri: uri}} />
            <Pressable
              onPress={() => {
                setUri(undefined);
              }}>
              <Text style={style.ImageLabel}>Delete Image</Text>
            </Pressable>
          </>
        ) : null}
      </View>

      <View style={style.inputViewContainer}>
        <Text style={style.textLabel}>Name*:</Text>
        <TextInput
          value={Name}
          inputMode="text"
          style={style.textInput}
          onChangeText={value => {
            setName(value);
          }}
        />
      </View>
      <View style={style.inputViewContainer}>
        <Text style={style.textLabel}>Mobile*:</Text>
        <TextInput
          value={Mobile}
          inputMode="tel"
          style={style.textInput}
          onChangeText={value => {
            setMobile(value);
          }}
        />
      </View>
      <View style={style.inputViewContainer}>
        <Text style={style.textLabel}>LandLine:</Text>
        <TextInput
          value={LandLine}
          inputMode="tel"
          style={style.textInput}
          onChangeText={value => {
            setLandLine(value);
          }}
        />
      </View>
      <View style={style.btnSaveViewContainer}>
        <TouchableOpacity
          style={style.touchableOpacityStyle}
          onPress={() => {
            Keyboard.dismiss();
            if (Name === undefined || Name.trim().length === 0) {
              Alert.alert('Name is required');
            } else if (Mobile === undefined || Mobile.trim().length === 0) {
              Alert.alert('Mobile number is required');
            } else {
              saveDataInDb();
            }
          }}>
          <Text style={style.btnSaveText}>
            {route.params?.btnTitle ? route.params.btnTitle : 'Save'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddOrUpdateContact;
