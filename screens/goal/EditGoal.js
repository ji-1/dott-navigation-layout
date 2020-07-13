import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';

const EditGoal = ({navigation, route}) => {
  const goal = route.params.goalId;
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => <Text>EditGoal {goal}</Text>,
      headerTitleAlign: 'center',
      headerBackImage: null,
      headerTransparent: true,
      borderBottomWidth: 0,
      headerLeft: () => null,
      headerRight: () => (
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Text size={16} color={'black'}>
            완료
          </Text>
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

export default EditGoal;
