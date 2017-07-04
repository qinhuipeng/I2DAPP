/**
 * Created by Administrator on 2017/6/17 0017.
 */

'use strict';

import React,{Component} from 'react';
import{
    Text,
    TextInput,
    Button,
    Alert,
    StyleSheet,
    View
} from 'react-native';


import TimerButton from '../component/TimerButton';

export default  class RegisterCompany extends Component {
    constructor(props) {
        super(props);
        this.state = {phoneNumber: '',verifyNumber:'',contingDone:false,codeSend:false};
    }


    _onPressLearnMore= () => {
        // let display = this.state.phoneNumber
        Alert(this.state.phoneNumber)
    }

    _requestSMSCode() {
        this.setState({codeSend:true});
    }

    render() {
        return (
            <View>
                <View style={styles.content}>
                    <View style={styles.phoneBox}>
                        <TextInput
                            onChangeText={(text) => this.setState({companyName: text})}
                            underlineColorAndroid={'transparent'}
                            placeholder="公司名称"
                            autoCapitalize={'none'}
                            autoCorrect={false}
                        />
                    </View>
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
                    <View style={styles.verifyBox}>
                        <TextInput
                            style={styles.verifyInput}
                            underlineColorAndroid={'transparent'}
                            keyboardType={'numeric'}
                            placeholder="请输入验证码"
                            autoCapitalize={'none'}
                            autoCorrect={false}
                            onChangeText={(text) => this.setState({verifyNumber: text})}
                        />
                        <TimerButton enable={this.state.phoneNumber.length}
                        textStyle={{color: '#6371CF'}}
                        timerCount={10}
                         onClick={()=>{
                             this._requestSMSCode()
                         }}/>
                    </View>

                    <View style={styles.phoneBox}>
                        <TextInput
                            onChangeText={(text) => this.setState({companyName: text})}
                            underlineColorAndroid={'transparent'}
                            placeholder="姓名"
                            autoCapitalize={'none'}
                            autoCorrect={false}
                        />
                    </View>

                    <View style={styles.phoneBox}>
                        <TextInput
                            onChangeText={(text) => this.setState({companyName: text})}
                            underlineColorAndroid={'transparent'}
                            placeholder="电子邮箱"
                            autoCapitalize={'none'}
                            autoCorrect={false}
                        />
                    </View>

                    <View style={styles.phoneBox}>
                        <TextInput
                            onChangeText={(text) => this.setState({companyName: text})}
                            underlineColorAndroid={'transparent'}
                            placeholder="输入密码"
                            autoCapitalize={'none'}
                            autoCorrect={false}
                        />
                    </View>


                    <View style={styles.phoneBox}>
                        <TextInput
                            onChangeText={(text) => this.setState({companyName: text})}
                            underlineColorAndroid={'transparent'}
                            placeholder="确认密码"
                            autoCapitalize={'none'}
                            autoCorrect={false}
                        />
                    </View>

                </View>
                <View style={{margin: 10}}>
                    <Button
                        disabled={!this.state.verifyNumber.length || !this.state.codeSend}
                        onPress={this._onPressLearnMore}
                        title="注册"
                        color="#6371CF"

                    />
                </View>
            </View>
        );


    }
}

const styles = StyleSheet.create({
    content: {
        margin: 10,
        borderColor: '#D6D6D6',
        borderWidth: 1,
    },
    phoneBox:{
        marginLeft:14,
        marginRight:14,
        height:41,
        borderBottomColor:'#D6D6D6',
        borderBottomWidth:1
    },
    verifyBox:{
        marginLeft:14,
        marginRight:14,
        height:41,
        borderBottomColor:'#D6D6D6',
        borderBottomWidth:1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    verifyInput:{
        width:150,
    },
    verifyBtn:{
        backgroundColor:'transparent',
        width: 110,
        height:40,
    },
    verifyBtnText:{
        textAlign:'center',
        height:40,
        color:'#6371CF',
        lineHeight:30
    },
    countBtn:{
        textAlign:'center',
        height:40,
        color:'#6371CF',
        lineHeight:30
    }
})
// module.exports = Register;
