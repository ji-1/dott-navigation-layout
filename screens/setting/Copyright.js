import React from 'react';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';

const Copyright = ({navigation, route}) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => <Text>Copyright {route.params.copyright}</Text>,
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
  }, [navigation, route.params.copyright]);

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

export default Copyright;
