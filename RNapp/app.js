//根据页面
'use strict';

import React from 'react';
import {
  StyleSheet,
  StatusBar,
  View,
  Platform
} from 'react-native';

import {
  StackNavigator,
} from 'react-navigation';


import AppMain from './pages/AppMain';
import Login from './pages/account/Login';
import registerTab from './pages/account/registerTab';
import NavLogin from './pages/account/navLogin';
import AddNextButton from './pages/index/AddNextButton'
import UserInfo from './pages/CenterContent/UserInfo'

export const STATUS_BAR_HEIGHT = (Platform.OS === 'ios' ? 20 : 25)
export const ABOVE_LOLIPOP = Platform.Version && Platform.Version > 19
var _navigator;
class App extends React.Component {
    constructor(props) {
       super(props);
   }

  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar
            barStyle='light-content'
            backgroundColor='#6371CF'
            style={{height: STATUS_BAR_HEIGHT}}
       />
       <A/>
      </View>
    );
  } 
}
let styles = StyleSheet.create({
  navigator: {
    flex: 1
  }
});

export default App;

const A = StackNavigator({
    AppMain: {screen: AppMain},
    NavLogin: {screen: NavLogin},
    Login: {screen: Login},
    UserInfo: {screen: UserInfo},
    registerTab: {screen: registerTab},
    AddNextButton: {screen: AddNextButton},
},{
    initialRouteName: 'AppMain', // 默认显示界面
    navigationOptions: {  // 屏幕导航的默认选项, 也可以在组件内用 static navigationOptions 设置(会覆盖此处的设置)
        header:null,
        headerStyle:{
            backgroundColor:'transparent',
        },
        headerTitleStyle:{
            textAlign:'center',
            fontSize:14
        }
    }
});