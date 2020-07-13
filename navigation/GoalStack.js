import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {GoalList, FinishedGoalList, JournalListByGoal} from '../screens/goal';
const GoalStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="GoalList"
      screenOptions={{
        headerStyle: {
          elevation: 0,
        },
        headerShown: true,
      }}>
      <Stack.Screen name="GoalList" component={GoalList} />
      <Stack.Screen name="FinishedGoalList" component={FinishedGoalList} />
      <Stack.Screen name="JournalListByGoal" component={JournalListByGoal} />
    </Stack.Navigator>
  );
};

export default GoalStack;
