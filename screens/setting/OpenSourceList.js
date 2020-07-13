import React from 'react';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

const OpenSourceList = ({navigation}) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'OpensourceList',
      headerTitleAlign: 'center',
      headerBackImage: null,
      headerTransparent: false,
      borderBottomWidth: 0,
      headerLeft: () => (
        <TouchableOpacity
          style={styles.icon}
          onPress={() => navigation.goBack()}>
          <AntIcon name="arrowleft" size={25} />
        </TouchableOpacity>
      ),
      headerLeftContainerStyle: {
        alignItems: 'center',
        marginLeft: 10,
        paddingRight: 10,
      },
      headerRight: () => null,
    });
  }, [navigation]);

  return ( 
    <TouchableOpacity
      onPress={() => navigation.navigate('Copyright', {copyright: 1})}
      style={styles.item}>
      <Text>OpenSourceList</Text>
    </TouchableOpacity>
  );
};

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

export default OpenSourceList;
