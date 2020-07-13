import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

const CreateGoal = ({navigation}) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'CreateGoal',
      headerBackImage: null,
      headerTransparent: true,
      headerTintColor: 'transparent',
      borderBottomWidth: 0,
      headerLeftContainerStyle: {
        alignItems: 'center',
        marginLeft: 10,
        paddingRight: 10,
      },
      headerLeft: () => (
        <TouchableOpacity
          style={styles.icon}
          onPress={() => navigation.goBack()}>
          <FeatherIcon name="x" size={26} />
        </TouchableOpacity>
      ),
      headerRightContainerStyle: {
        alignItems: 'center',
        paddingRight: 10,
      },
      headerRight: () => (
        <TouchableOpacity
          style={styles.icon}
          onPress={() => {
            navigation.goBack();
          }}>
          <Text>완료</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return <View></View>;
};

export default CreateGoal;

const styles = StyleSheet.create({
  icon: {
    width: 45,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
