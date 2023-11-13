import React from 'react';
import {View,Text }from 'react-native';

const HomeScreen: ScreenProps<'HomeScreen'> = ({
    navigation,
  }) => {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home</Text>        
      </View>
    );
  };

  export default React.memo(HomeScreen);