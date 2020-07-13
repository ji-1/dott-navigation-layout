import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';

const TagSelectList = ({route, navigation}) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: '태그 선택',
      headerBackImage: null,
      headerTransparent: false,
      headerRight: () => (
        <TouchableOpacity
          style={styles.icon}
          onPress={() => {
            navigation.goBack();
          }}>
          <Text size={16}>완료</Text>
        </TouchableOpacity>
      ),
      headerRightContainerStyle: {
        alignItems: 'center',
        paddingRight: 10,
      },
    });
  }, [navigation]);

  return <View></View>;
};

const styles = StyleSheet.create({
  icon: {
    flex: 0,
    width: 45,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default TagSelectList;
