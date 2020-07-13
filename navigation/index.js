import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from './RootStack';

const navigationPersistenceKey = __DEV__ ? 'NavigationStateDEV' : null;

function Navigation() {
  return (
    <NavigationContainer persistenceKey={navigationPersistenceKey}>
      <RootStack />
    </NavigationContainer>
  );
}

export {Navigation};
