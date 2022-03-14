import {CommonActions, useNavigation} from '@react-navigation/native';
import React, {useContext, useEffect} from 'react';
import {height, isIOS} from '../Utils/Constant';

import {AppContext} from '../Context';
import CommonStyle from '../Theme/CommonStyle';
import {View} from 'react-native';

const Initial = () => {
  const {setDisplayHeight} = useContext(AppContext);
  const navigation = useNavigation();

  useEffect(() => {
    goToNextScreen('Home');
  }, []);

  const goToNextScreen = async (name, params = {}) => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name, params}],
      }),
    );
  };

  const onLayout = ({nativeEvent}) => {
    setDisplayHeight((!isIOS && nativeEvent.layout.height) || height);
  };

  return <View style={CommonStyle.flexContainer} onLayout={onLayout} />;
};

export default Initial;
