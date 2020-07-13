import React from 'react';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

const Developer = ({navigation}) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Developer',
      headerBackImage: null,
      headerTransparent: true,
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
    });
  }, [navigation]);

  return <View></View>;
};

const styles = StyleSheet.create({
  icon: {
    width: 45,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Developer;
