import React from 'react';
import {TouchableOpacity, StyleSheet, View, Text} from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';

const JournalCalendarByDate = ({navigation}) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => <Text>JournalCalendarByDate</Text>,
      headerTitleAlign: 'center',
      headerBackImage: null,
      headerTransparent: false,
      headerBackgroundColor: 'white',
      borderBottomWidth: 0,
      headerLeft: () => (
        <TouchableOpacity
          style={styles.icon}
          onPress={() => {
            navigation.goBack();
          }}>
          <AntIcon name="close" size={23} />
        </TouchableOpacity>
      ),
      headerRight: () => null,
      headerLeftContainerStyle: {
        alignItems: 'center',
        marginLeft: 10,
        paddingRight: 10,
      },
      gestureEnabled: false,
    });
  }, [navigation]);

  return <View></View>;
};

const styles = StyleSheet.create({
  icon: {
    width: 45,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default JournalCalendarByDate;
