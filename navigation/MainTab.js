import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SettingStack from './SettingStack';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntIcon from 'react-native-vector-icons/AntDesign';
import GoalDrawer from './GoalDrawer';
import JournalStack from './JournalStack';

const MainTab = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Goal"
      screenOptions={({route}) => ({
        tabBarIcon: ({size, color}) => {
          let iconName;
          if (route.name === 'Goal') {
            return <AntIcon name="bars" size={25} color={color} />;
          } else if (route.name === 'Journal') {
            return (
              <MaterialCommunityIcons
                name="calendar-blank"
                size={25}
                color={color}
              />
            );
          } else if (route.name === 'Setting') {
            iconName = 'more-horizontal';
          }
          return <FeatherIcon name={iconName} size={33} color={color} />;
        },
      })}
      tabBarOptions={{
        showLabel: false,
        activeTintColor: 'black',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Goal" component={GoalDrawer} />
      <Tab.Screen name="Journal" component={JournalStack} />
      <Tab.Screen name="Setting" component={SettingStack} />
    </Tab.Navigator>
  );
};

export default MainTab;
