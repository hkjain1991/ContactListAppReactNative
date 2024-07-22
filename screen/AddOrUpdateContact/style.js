import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  textLabel: {
    color: 'black',
    fontStyle: 'normal',
    fontWeight: 'bold',
    marginHorizontal: 5,
    width: '20%',
  },
  textInput: {
    color: 'black',
    flex: 1,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    marginHorizontal: 5,
    height: 40,
  },
  inputViewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  btnSaveViewContainer: {justifyContent: 'center', flexDirection: 'row'},
  touchableOpacityStyle: {
    height: 60,
    width: 200,
    backgroundColor: 'green',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
  },
  btnSaveText: {color: 'white'},
  ImageLabel: {
    color: 'black',
    fontStyle: 'normal',
    fontWeight: 'bold',
    marginHorizontal: 5,
    width: '50%',
  },
  SelectedImageLabel: {
    color: 'black',
    fontStyle: 'normal',
    fontWeight: 'bold',
    marginHorizontal: 5,
    width: '30%',
  },
  ImageStyle: {
    width: 40,
    resizeMode: 'contain',
    height: 40,
  },
  capturedImage: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: 'green',
  },
  PressabbleImageLibrary: {marginHorizontal: 5},
});

export default style;
