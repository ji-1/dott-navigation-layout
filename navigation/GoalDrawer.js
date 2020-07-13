import React from 'react';
import {View, Text} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import GoalStack from './GoalStack';
import {StackActions} from '@react-navigation/native';

const GoalDrawer = () => {
  const Drawer = createDrawerNavigator();

  function CustomDrawerContent({navigation}) {
    return (
      <DrawerContentScrollView>
        <DrawerItem
          label={() => (
            <View>
              <Text>GoalList</Text>
            </View>
          )}
          onPress={() => {
            navigation.navigate('GoalList', {tagId: ''});
          }}
        />
        <DrawerItem
          label={() => (
            <View>
              <Text>GoalListByTag</Text>
            </View>
          )}
          onPress={() => {
            navigation.dispatch(StackActions.replace('GoalList', {tagId: 1}));
          }}
        />
        <DrawerItem
          label={'TagList'}
          onPress={() => {
            navigation.navigate('TagList');
          }}
        />
        <DrawerItem
          label={'FinishedGoalList'}
          onPress={() => {
            navigation.navigate('FinishedGoalList');
          }}
        />
      </DrawerContentScrollView>
    );
  }

  return (
    <Drawer.Navigator
      backBehavior="none"
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="GoalStack" component={GoalStack} />
    </Drawer.Navigator>
  );
};

export default GoalDrawer;
