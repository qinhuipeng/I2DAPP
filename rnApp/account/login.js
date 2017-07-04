import React,{Component} from 'react';
import{
    AsyncStorage,
    TextInput,
    Text,
    Button,
    TouchableOpacity,
    Dimensions,
    ToastAndroid,
    StyleSheet,
    View
} from 'react-native';
const { width,height } = Dimensions.get('window')

import Header from '../include/header';
import NetUitl from '../util/NetUtil';
import config from '../config/config';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {phoneNumber: '',password:''};
    }

    static navigationOptions = {
        header:null
    };

    _successLogin(navigate){
        var url=config.base_url + '/login/loginSystem.do';
        let formData = new FormData();
        formData.append("verifyCode","3232");
        formData.append("userName",'admin@test6');
        formData.append("passWord",this.state.password);
        NetUitl.postJson(url,formData,(responseText) => {
            let obj= JSON.parse(responseText);
            if(obj.success){
                this.props.logining('admin@test6');
            }else{
                ToastAndroid.show(obj.message,ToastAndroid.SHORT);
            }
        });
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <View><Header title="登录" onPress={()=> navigate.goBack()}/></View>
                <View style={styles.content}>
                    <View style={styles.phoneBox}>
                        <TextInput
                            onChangeText={(text) => this.setState({phoneNumber: text})}
                            underlineColorAndroid={'transparent'}
                            placeholder="请输入手机号码"
                            autoCapitalize={'none'}
                            autoCorrect={false}
                            keyboardType={'numeric'}
                        />
                    </View>
                    <View style={styles.passwordBox}>
                        <TextInput
                            underlineColorAndroid={'transparent'}
                            placeholder="请输入密码"
                            secureTextEntry={true}
                            autoCapitalize={'none'}
                            autoCorrect={false}
                            onChangeText={(text) => this.setState({password: text})}
                        />
                    </View>



                </View>
                <View style={{margin: 10}}>
                    <Button
                        //disabled={!this.state.password.length || !this.state.phoneNumber.length}
                        onPress={()=>this._successLogin(navigate)}
                        title="登录"
                        color="#6371CF"
                        style={{padding:10}}
                    />
                </View>

                <View style={styles.regView}>
                    <TouchableOpacity style={styles.regPressView}>
                        <Text style={styles.textTip}>忘记密码</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.regPressView} onPress={()=>{navigate('registerTab',{user:''})}}>
                        <Text style={styles.textTip}>没有账号</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );


    }
}


const styles = StyleSheet.create({
    content: {
        margin: 10,
        height:84,
        backgroundColor:"#ffffff",
        borderColor: '#D6D6D6',
        borderWidth: 1,
    },
    phoneBox:{
        marginLeft:14,
        marginRight:14,
        height:41,
        backgroundColor:"#ffffff",
        borderBottomColor:'#D6D6D6',
        borderBottomWidth:1
    },
    passwordBox:{
        marginLeft:14,
        marginRight:14,
        backgroundColor:"#ffffff",
        height:41,
    },
    textTip:{
        color:'#7E7E7E'
    },
    regPressView:{
        height:40,
    },
    regView:{
        width:width,
        height:100,
        marginTop:20,
        flexDirection: 'row',
        justifyContent: 'space-around',
    }
})
module.exports = Login;