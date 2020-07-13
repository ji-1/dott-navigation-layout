import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';

const JournalListByDate = ({route, navigation}) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'JournalListByDate',
      headerBackgroundColor: 'white',
      headerTitleAlign: 'center',
      headerBackImage: null,
      headerTransparent: true,
      headerLeft: () => null,
      headerRight: () => (
        <TouchableOpacity
          style={styles.icon}
          onPress={() => {
            navigation.navigate('JournalCalendarByDate', {
              selected: 1,
            });
          }}>
          <AntIcon name="calendar" size={21} color={'black'} />
        </TouchableOpacity>
      ),
      headerRightContainerStyle: {
        alignItems: 'center',
        paddingRight: 10,
        flexDirection: 'row',
      },
    });
  }, [navigation, route.params]);

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

export default JournalListByDate;
