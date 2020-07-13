import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import AntIcon from 'react-native-vector-icons/AntDesign';

const JournalListByGoal = ({route, navigation}) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'JournalListByGoal',
      headerBackImage: null,
      headerTransparent: true,
      headerLeft: () => (
        <TouchableOpacity
          style={styles.icon}
          onPress={() => navigation.goBack()}>
          <AntIcon name="arrowleft" size={25} />
        </TouchableOpacity>
      ),
      headerLeftContainerStyle: {
        alignItems: 'center',
        marginLeft: 10,
        paddingRight: 10,
      },
      headerRight: () => (
        <>
          <TouchableOpacity
            style={styles.icon}
            onPress={() => {
              navigation.navigate('JournalCalendarByGoal', {goalId: 1});
            }}>
            <AntIcon name="calendar" size={21} color={'black'} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.icon}
            onPress={() => {
              navigation.navigate('EditGoal', {goalId: 1});
            }}>
            <EntypoIcon
              name="dots-three-horizontal"
              size={24}
              color={'black'}
            />
          </TouchableOpacity>
        </>
      ),
      headerRightContainerStyle: {
        alignItems: 'center',
        paddingRight: 10,
        flexDirection: 'row',
      },
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

export default JournalListByGoal;
