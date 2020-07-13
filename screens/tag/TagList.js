import React from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

const TagList = ({navigation}) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'TagList',
      headerBackImage: null,
      headerTransparent: false,
      headerLeft: () => (
        <TouchableOpacity
          style={styles.icon}
          onPress={() => {
            navigation.goBack();
          }}>
          <FeatherIcon name="x" size={26} />
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

export default TagList;
