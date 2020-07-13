import React, {useLayoutEffect, useEffect} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {DrawerActions} from '@react-navigation/native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const FinishedGoalList = ({navigation}) => {
  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      navigation.closeDrawer();
    });
    return unsubscribe;
  }, [navigation]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'FinishedGoalList',
      headerTitleAlign: 'center',
      headerBackImage: null,
      headerBackgroundColor: 'white',
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
    });
  }, [navigation]);

  return <View></View>;
};

export default FinishedGoalList;

const styles = StyleSheet.create({
  icon: {
    width: 45,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
