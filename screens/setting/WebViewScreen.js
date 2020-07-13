import React from 'react';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {TouchableOpacity, View} from 'react-native';

const WebViewScreen = ({route, navigation}) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'WebViewScreen',
      headerTitleAlign: 'center',
      headerBackImage: null,
      headerTransparent: false,
      borderBottomWidth: 0,
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntIcon name="close" size={23} />
        </TouchableOpacity>
      ),
      headerLeftContainerStyle: {
        alignItems: 'center',
        marginLeft: 10,
        paddingRight: 10,
      },
      headerRight: () => null,
      headerStyle: {
        backgroundColor: 'pink',
      },
    });
  }, [navigation]);

  return <View></View>;
};

export default WebViewScreen;
