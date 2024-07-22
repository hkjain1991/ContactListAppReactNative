import React, {useState} from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Pressable,
  Alert,
} from 'react-native';
import style from './style';
import * as ImagePicker from 'react-native-image-picker';

const AddOrUpdateContact = ({btnTitle, name, mobile, landline, photouri}) => {
  const [Name, setName] = useState(name ? name : '');
  const [Mobile, setMobile] = useState(mobile ? mobile : '');
  const [LandLine, setLandLine] = useState(landline ? landline : '');
  const [uri, setUri] = useState(photouri ? photouri : '');
  let options = {
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
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
                setUri('');
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
                setUri('');
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
                setUri('');
              }}>
              <Text>Delete Image</Text>
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
            if (Name.length === 0) {
              Alert.alert('Name is required');
            } else if (Mobile.length === 0) {
              Alert.alert('Mobile number is required');
            }
          }}>
          <Text style={style.btnSaveText}>{btnTitle ? btnTitle : 'Save'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddOrUpdateContact;
