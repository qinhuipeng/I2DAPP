/**
 * Created by Administrator on 2017/6/18 0018.
 */
import React,{Component} from 'react';
import{
    View,
    Dimensions
} from 'react-native';

import Header from  '../include/header';
import Register from './register';
import RegisterCompany from './registerCompany';
import JoinCompany from './JoinCompany';


import ScrollableTabView from 'react-native-scrollable-tab-view';

var width= Dimensions.get('window').width;
var height= Dimensions.get('window').height;
export default  class RegisterTab extends Component {
    render() {
        const  navigate  = this.props.navigation;

        return (
            <View>
                <Header title="注册"></Header>
                <View style={{width:width,height:height}}>
                    <ScrollableTabView tabBarUnderlineStyle={{backgroundColor:"transparent",height:0}}
                                       tabBarTextStyle={{lineHeight:30}}
                                       tabBarActiveTextColor ={'#6371CF'}>
                        <Register navigation={navigate} tabLabel="个人注册" />
                        <RegisterCompany tabLabel="公司注册" />
                        <JoinCompany tabLabel="加入公司" />
                    </ScrollableTabView>
                </View>
            </View>


        )
    };


}
