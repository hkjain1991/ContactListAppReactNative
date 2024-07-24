import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: 'green',
  },
  nameText: {
    color: 'red',
    marginHorizontal: 10,
  },
  mainViewContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'green',
  },
});

export default style;
