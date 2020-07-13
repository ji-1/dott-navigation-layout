import React from 'react';
import {EditGoal, CreateGoal, JournalCalendarByGoal} from '../screens/goal';
import {TagList, TagSelectList} from '../screens/tag';
import {JournalCalendarByDate, JournalDetail} from '../screens/journal';
import {WebViewScreen} from '../screens/setting';
import {createStackNavigator} from '@react-navigation/stack';
import MainTab from './MainTab';

const RootStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      mode="modal"
      screenOptions={{
        headerStyle: {
          elevation: 0, // for android
        },
        headerTitle: null,
        headerTransparent: true,
        headerBackTitle: null,
        headerBackImage: null,
      }}>
      <Stack.Screen name="MainTab" component={MainTab} />
      <Stack.Screen name="CreateGoal" component={CreateGoal} />
      <Stack.Screen name="EditGoal" component={EditGoal} />
      <Stack.Screen name="TagList" component={TagList} />
      <Stack.Screen name="TagSelectList" component={TagSelectList} />
      <Stack.Screen name="JournalDetail" component={JournalDetail} />
      <Stack.Screen
        name="JournalCalendarByDate"
        component={JournalCalendarByDate}
      />
      <Stack.Screen
        name="JournalCalendarByGoal"
        component={JournalCalendarByGoal}
      />
      <Stack.Screen name="WebViewScreen" component={WebViewScreen} />
    </Stack.Navigator>
  );
};

export default RootStack;
