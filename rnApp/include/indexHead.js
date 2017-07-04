/**
 * Created by Administrator on 2017/6/19 0019.
 */
/**
 * Created by yuanguozheng on 16/1/19.
 */
'use strict';
import React,{Component} from 'react';
import {
    Image,
    TextInput,
    View,
    Alert,
    TouchableHighlight,
    Platform,
    StyleSheet
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

export default class IndexHead extends Component {

    render() {
        const { navigate } = this.props.navigation;

        return (
            <View style={styles.container}>
                <View style={styles.searchBox}>
                    <Image source={require('../../images/header/icon_search.png')} style={styles.searchIcon}/>
                    <TextInput
                        underlineColorAndroid={'transparent'}
                        placeholder='搜索零件/问题/关键字'
                        style={styles.inputText}/>
                    <Image source={require('../../images/header/icon_voice.png')} style={styles.voiceIcon}/>
                </View>
                <TouchableHighlight onPress={()=> navigate('UserInfo',{user:'Lucy'})}>
                    <Icon
                        name='md-person' // 图标
                        size={25}
                        color='#fff'/>
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',   // 水平排布
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: Platform.OS === 'ios' ? 20 : 0,  // 处理iOS状态栏
        height: Platform.OS === 'ios' ? 68 : 48,   // 处理iOS状态栏
        backgroundColor: '#6371CF',
        alignItems: 'center'  // 使元素垂直居中排布, 当flexDirection为column时, 为水平居中
    },
    logo: {
        height: 24,
        width: 64,
        resizeMode: 'stretch'  // 设置拉伸模式
    },
    searchBox: {
        height:30,
        flexDirection: 'row',
        flex: 1,  // 类似于android中的layout_weight,设置为1即自动拉伸填充
        borderRadius: 5,  // 设置圆角边
        backgroundColor: 'white',
        alignItems: 'center',
        marginLeft: 8,
        marginRight: 12
    },
    scanIcon: {
        height: 26.7,
        width: 26.7,
        resizeMode: 'stretch'
    },
    searchIcon: {
        marginLeft: 6,
        marginRight: 6,
        width: 16.7,
        height: 16.7,
        resizeMode: 'stretch'
    },
    voiceIcon: {
        marginLeft: 5,
        marginRight: 8,
        width: 15,
        height: 20,
        resizeMode: 'stretch'
    },
    inputText: {
        marginTop:0,
        marginBottom:0,
        paddingTop:0,
        paddingBottom:0,
        flex: 1,
        backgroundColor: 'transparent',
        fontSize: 14
    }
});