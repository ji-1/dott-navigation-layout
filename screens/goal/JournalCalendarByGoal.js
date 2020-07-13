import React from 'react';
import {TouchableOpacity, StyleSheet, View, Text} from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';

const JournalCalendarByGoal = ({route, navigation}) => {
  const goal = route.params.goalId;
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => <Text>JournalCalendarByGoal {goal}</Text>,
      headerTitleAlign: 'center',
      headerBackImage: null,
      headerTransparent: false,
      headerBackgroundColor: 'white',
      headerTintColor: 'transparent',
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
  }, [goal, navigation]);

  return <View></View>;
};

export default JournalCalendarByGoal;

const styles = StyleSheet.create({
  icon: {
    width: 45,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
