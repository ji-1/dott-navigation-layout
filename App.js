/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Navigation} from './navigation';
import {View} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex:1, backgroundColor: 'white'}}>
        <Navigation />
      </View>
    );
  }
}
