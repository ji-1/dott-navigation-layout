import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import EntypoIcon from 'react-native-vector-icons/Entypo';

const JournalDetail = ({route, navigation}) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'JournalDetail',
      headerBackImage: null,
      headerTransparent: false,
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
        <TouchableOpacity style={styles.icon}>
          <EntypoIcon name="dots-three-horizontal" size={24} color={'black'} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return <View></View>;
};

export default JournalDetail;

const styles = StyleSheet.create({
  icon: {
    width: 45,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
