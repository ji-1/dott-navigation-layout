import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';

const SettingMain = ({navigation}) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'SettingMain',
      headerTitleAlign: 'center',
      headerBackImage: null,
      headerTransparent: false,
      borderBottomWidth: 0,
      headerLeft: () => null,
      headerRight: () => null,
    });
  }, [navigation]);

  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Developer')}
        style={styles.item}>
        <Text>Developer</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('OpenSourceList')}
        style={styles.item}>
        <Text>OpenSourceList</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SettingMain;

const styles = StyleSheet.create({
  item: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    height: 100,
    marginBottom: 10,
    backgroundColor: 'pink',
  },
  icon: {
    width: 45,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
});