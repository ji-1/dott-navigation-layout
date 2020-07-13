import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {JournalListByDate} from '../screens/journal';
import {ifIphoneX} from 'react-native-iphone-x-helper';

const JournalStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          elevation: 0, // for android
          ...ifIphoneX({height: 90}, {height: 70}),
        },
        headerTitle: null,
        headerShown: true,
      }}>
      <Stack.Screen name="JournalListByDate" component={JournalListByDate} />
    </Stack.Navigator>
  );
};

export default JournalStack;
