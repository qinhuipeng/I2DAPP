/**
 * Created by Administrator on 2017/6/20 0020.
 */
/**
 * Created by Administrator on 2017/6/17 0017.
 */

'use strict';

import React,{Component} from 'react';
import{
    Text,
    TextInput,
    Image,
    Dimensions,
    StyleSheet,
    View
} from 'react-native';


import ConfirmButton from '../component/ConfirmButton'

var width= Dimensions.get('window').width;
var height= Dimensions.get('window').height;
export default  class NavLogin extends Component {
    constructor(props) {
        super(props);

    }
    static navigationOptions = {
        header:null
    };

    onpressToLogin(navigate){

    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <View style={styles.content}>
                    <View/>
                    <Image source={require('../../images/logo.png')}  style={styles.logo}/>
                    <View/>
                </View>
                <View style={styles.btnView}>
                    <View/>
                    <View style={styles.item}>
                        <ConfirmButton buttonStyle={[styles.btn,styles.loginBtn]}
                                       text='登录'
                                       onPress={()=> navigate('Login',{user:'Lucy'})}
                                       enable={true}
                        />
                    </View>
                    <View/>
                    <View style={styles.item}>
                        <ConfirmButton
                            buttonStyle={[styles.btn,styles.regBtn]}
                            text='注册'
                            textStyle={{color:'#333'}}
                            enable={true}
                            onPress={()=> navigate('registerTab',{user:'Lucy'})}
                        />
                    </View>
                    <View/>
                </View>
            </View>
        );


    }
}

const styles = StyleSheet.create({
    logo: {
        marginTop:height*0.28,
        height:90,
        width:90,
        resizeMode: 'stretch'  // 设置拉伸模式
    },
    content:{
        flexDirection:'row',
        justifyContent:'center',
        height:height*0.84
    },
    btnView:{
        flexDirection:'row',
        justifyContent:'center'
    },
    item:{
        paddingHorizontal:width*0.1
    },
    btn:{
        width:width*0.3

    },
    loginBtn:{

    },
     regBtn:{
         backgroundColor:'#ffffff',
         borderColor:'#979797',
         borderWidth:1,
    }
});
