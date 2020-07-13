import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Developer,
  SettingMain,
  OpenSourceList,
  Copyright,
} from '../screens/setting';

const SettingStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="SettingMain"
      screenOptions={{
        headerStyle: {
          elevation: 0, // for android
          height: 90,
        },
        headerTitle: null,
        headerShown: true,
      }}>
      <Stack.Screen name="SettingMain" component={SettingMain} />
      <Stack.Screen name="Developer" component={Developer} />
      <Stack.Screen name="OpenSourceList" component={OpenSourceList} />
      <Stack.Screen name="Copyright" component={Copyright} />
    </Stack.Navigator>
  );
};

export default SettingStack;
