/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


import Login from './account/login';
import registerTab from './account/registerTab';
import Index from './index/index';
import NavLogin from './account/navLogin';
import Contacts from './contact-center/Contacts';
import AddNextButton from './index/AddNextButton'
import Collection from './index/laptop/Collection'
import UserInfo from './setting/UserInfo'


import {
    StackNavigator,
} from 'react-navigation';


const navigator = StackNavigator({
    Index: {screen: Index},
    NavLogin: {screen: NavLogin},
    Login: {screen: Login},
    UserInfo: {screen: UserInfo},
    Contacts: {screen: Contacts},
    registerTab: {screen: registerTab},
    AddNextButton: {screen: AddNextButton},
    Collection: {screen: Collection},

},{
    initialRouteName: 'Index', // 默认显示界面

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
export default navigator