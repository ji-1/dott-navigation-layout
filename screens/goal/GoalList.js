import React, {useLayoutEffect, useEffect} from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {DrawerActions} from '@react-navigation/native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const GoalList = ({route, navigation}) => {
  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      navigation.closeDrawer();
    });
    return unsubscribe;
  }, [navigation]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle:
        route.params && route.params.tagId !== ''
          ? () => <Text>tag 1</Text>
          : () => <Text>GoalList</Text>,
      headerBackImage: null,
      headerTransparent: false,
      headerBackgroundColor: 'white',
      headerTintColor: 'transparent',
      borderBottomWidth: 0,
      gestureEnabled: false,
      headerLeft: () => (
        <TouchableOpacity
          style={styles.icon}
          onPress={() => {
            navigation.dispatch(DrawerActions.toggleDrawer());
          }}>
          <MaterialCommunityIcon name="menu" size={26} />
        </TouchableOpacity>
      ),
      headerLeftContainerStyle: {
        alignItems: 'center',
        marginLeft: 10,
        paddingRight: 10,
      },
      headerRight: () => (
        <TouchableOpacity
          style={styles.icon}
          onPress={() => {
            navigation.navigate('CreateGoal');
          }}>
          <AntIcon name="plus" size={26} />
        </TouchableOpacity>
      ),
      headerRightContainerStyle: {
        alignItems: 'center',
        paddingRight: 10,
      },
    });
  }, [navigation, route.params]);

  return (
    <TouchableOpacity
      style={styles.goal}
      onPress={() => {
        navigation.navigate('JournalListByGoal', {goalId: 1});
      }}>
      <Text>Goal 1</Text>
    </TouchableOpacity>
  );
};

export default GoalList;

const styles = StyleSheet.create({
  goal: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    height: 100,
    backgroundColor: 'pink',
  },
  icon: {
    width: 45,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
