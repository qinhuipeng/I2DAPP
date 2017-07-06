import React,{Component} from 'react';
import{
    AsyncStorage,
    Dimensions,
    Button,
    Text,
    TouchableHighlight,
    StyleSheet,
    View
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import Header from '../../component/header';
import NetUitl from '../../utils/NetUtil';
import ConfirmButton from '../../component/ConfirmButton'


const { width,height } = Dimensions.get('window');
export default class UserInfo extends Component {
    constructor(props) {
        super(props);
    }

    _goBack(navigate){
        navigate.goBack();
    }

    _loginOut(navigate){
        AsyncStorage.removeItem('user')
        navigate.navigate('AppMain',{action:'loginOut'});
    }


    render() {
        return (
            <View>
                <View><Header textStyle={{color:'#fff'}}
                              iconColor={'#fff'}
                              headerStyle={{backgroundColor:'#6371CF',height:40}}
                              title="设置" onPress={()=>this._goBack(this.props.navigation)}
                /></View>
d
                <TouchableHighlight underlayColor="#ccc" style={styles.userInfo}>
                    <View style={styles.view}>
                        <Icon
                            name='ios-contact' // 图标
                            size={40}
                            color='#6371CF'/>
                        <View style={styles.texts}>
                            <Text style={styles.textsTitle}>张三 </Text>
                        </View>

                        <View style={styles.right}>
                            <Icon
                                name='ios-arrow-forward' // 图标
                                size={20}/>
                        </View>

                    </View>
                </TouchableHighlight>

                <TouchableHighlight underlayColor="#ccc" style={[styles.setting,{marginTop:10}]}>
                    <View style={styles.view}>
                        <View style={styles.texts}>
                            <Text style={styles.textsTitle}>通用设置 </Text>
                        </View>
                        <View style={styles.right}>
                            <Icon
                                name='ios-arrow-forward' // 图标
                                size={20}/>
                        </View>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight underlayColor="#ccc" style={styles.setting}>
                    <View style={styles.view}>
                        <View style={styles.texts}>
                            <Text style={styles.textsTitle}>安全隐私 </Text>
                        </View>
                        <View style={styles.right}>
                            <Icon
                                name='ios-arrow-forward' // 图标
                                size={20}/>
                        </View>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight underlayColor="#ccc" style={[styles.setting,{marginTop:10}]}>
                    <View style={styles.view}>
                        <View style={styles.texts}>
                            <Text style={styles.textsTitle}>帮助与反馈 </Text>
                        </View>
                        <View style={styles.right}>
                            <Icon
                                name='ios-arrow-forward' // 图标
                                size={20}/>
                        </View>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight underlayColor="#ccc" style={styles.setting}>
                    <View style={styles.view}>
                        <View style={styles.texts}>
                            <Text style={styles.textsTitle}>关于 </Text>
                        </View>
                        <View style={styles.right}>
                            <Icon
                                name='ios-arrow-forward' // 图标
                                size={20}/>
                        </View>
                    </View>
                </TouchableHighlight>

                <View style={styles.btn}>
                    <ConfirmButton onPress={()=>this._loginOut(this.props.navigation)}
                                   underlayColor='#FF5656'
                                   buttonStyle={{backgroundColor:"#FF5656",width:width-20,marginLeft:10,marginTop:40}}
                                   enable={true} text={'登出系统'}/>

                </View>
            </View>
        );


    }
}


const styles = StyleSheet.create({
    userInfo:{
        backgroundColor:'#fff',
        height:height*0.14,
        marginVertical:10,
        borderTopWidth:2,
        borderBottomWidth:2,
        borderColor:"#ccc",
    },
    setting:{
        borderTopWidth:1,
        borderBottomWidth:1,
        borderColor:"#ccc",
        backgroundColor:'#fff',
        height:height*0.06,
    },
    help:{

    },
    view:{
        flex:1,
        marginHorizontal:10,
        alignItems: 'center',
        flexDirection:"row",
    },
    right:{
        position:'absolute',
        right:15,
    },
})