
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    AsyncStorage,
    View
} from 'react-native';

import ScrollableTabView from 'react-native-scrollable-tab-view';
import CustomTabBar from '../component/CustomTabBar';
import Slider from '../component/Slider';
import LapTop from './laptop/LapTop'
import IndexHead from '../include/indexHead'
import IconFont from '../component/IconFont'
import WelcomePage from './WelcomePage'
import NavLogin from '../account/navLogin';
import SwipeoutExample from '../component/swipeout/Swipeout'
import SwipeoutList from '../component/swipeout/SwipeoutList'
import Login from '../account/login';
import  Header from '../include/header'


export default class Index extends Component {

    constructor(props) {
        super(props);

        console.log(this.props)
        this.state = {
            enters:false,
            action:false,
            logined:false,
            tabNames: ['工作台', '问题库', '', '设计库','联系人'],
            tabIconNames: ['md-laptop', 'md-help','md-add-circle', 'ios-paper-plane', 'ios-person-add'],
        };
        this._enterSlide = this._enterSlide.bind(this);
        this._logining = this._logining.bind(this);
    }
    componentWillMount(){
        this.timer && clearTimeout(this.timer);
    }

    componentDidMount(){
        var that =this;

        if(this.props.navigation.state.action){

        }else{

        }
        AsyncStorage.getItem('enters').then((value)=>{
            if(value=='yes'){
                that.setState({
                    enters:true
                })
            }
        });
        AsyncStorage.getItem('user').then((value)=>{
            if(value){
                that.setState({
                    logined:true
                })
            }
        });

        this.timer = setTimeout(
            () => {
                this.setState({
                    action:true
                })
            },
            2000
        );
    }

    _enterSlide(){
        this.setState({
            enters:true
        });
    }

    _logining(user){
        var that =this;
        AsyncStorage.setItem('user',user).then(()=>{
            that.setState({
                logined:true
            })
        })
    }

    render() {
        let tabNames = this.state.tabNames;
        let tabIconNames = this.state.tabIconNames;
        const navigate  = this.props.navigation;
        let flag;// 是不是 直接进入首页

        if(this.props.navigation.state.params){
            flag= this.props.navigation.state.params.action;
        }

        if(!this.state.action && !flag){
            return(
                <WelcomePage/>
            )
        }

        // 第一次点开项目
        if(!this.state.enters && !flag){
            return(
                <Slider enterSlide={this._enterSlide}/>
            )
        }


        //没有登录 跳入 登录页面
        if(!this.state.logined && (flag!=='reg' || flag==='loginOut' || !flag)){
            return(
                <Login navigation={navigate} logining={this._logining}/>
            )
        }


        return (
            <ScrollableTabView style={{borderTopColor:'#ccc'}}
                               renderTabBar={() => <CustomTabBar navigation={this.props.navigation} tabNames={tabNames} tabIconNames={tabIconNames}/>}
                               locked={true} initialPage={0}
                               scrollWithoutAnimation ={true}
                               tabBarPosition='bottom'>

                <View style={styles.content} tabLabel='key1'>
                    <IndexHead navigation={navigate}/>
                    <LapTop navigation={this.props.navigation}/>
                </View>

                <View style={styles.content} tabLabel='key2'>

                </View>

                <View style={styles.content} tabLabel='key3'>
                    <Text>#2</Text>
                </View>

                <View style={styles.content} tabLabel='key4'>
                    <Header textStyle={{color:'#fff'}}
                            iconColor={'#fff'}
                            headerStyle={{backgroundColor:'#6371CF',height:40}}
                            title="设计中心"
                    />
                    <SwipeoutList/>
                </View>

                <View style={styles.content} tabLabel='key5'>
                    <IconFont
                        font="&#xe615;" // 这是一个导航栏home的图标
                        style={{fontSize: 66 ,color:'#ced2ff'}}
                        onPress={() =>{
                            AsyncStorage.removeItem('enters');
                            AsyncStorage.removeItem('user')
                        }}
                    />
                </View>
            </ScrollableTabView>

        );
    }

}

const styles = StyleSheet.create({
    content: {
        backgroundColor: '#EBEBEB',
        flex: 1
    }
});