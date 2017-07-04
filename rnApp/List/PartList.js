/**
 * Created by Administrator on 2017/6/23 0023.
 */

import React,{Component} from 'react';
import{
    Text,
    TextInput,
    Button,
    TouchableHighlight,
    Alert,
    StyleSheet,
    View
} from 'react-native';


import Icon from 'react-native-vector-icons/Ionicons';


export default class LapTop extends Component{
    constructor(prop){
        super(prop)
    }

    renderRow(row,i){
        return(
            <TouchableHighlight key={i} underlayColor="#ccc" style={styles.items} onPress={row.onPress}>
                <View style={styles.view}>
                    <Icon
                        name='ios-car' // 图标
                        size={30}
                        color='#6371CF'/>
                    <View style={styles.texts}>
                        <Text style={styles.textsTitle}>{row.textTitle} </Text>
                        {
                            row.texts?
                                <Text>{row.texts} </Text>:
                                null
                        }

                    </View>

                </View>
            </TouchableHighlight>
        )
    }

    renderRows() {

        const { navigate } = this.props.navigation;
        let arr=[
            {
                textTitle:'分享阁',
                texts:'来自好友的分享内容',
            },
            {
                textTitle:'发起问题',
                texts:'针对疑问，发起你的问题',
            },
            {
                textTitle:'回答问题',
                texts:'需要你解答的问题',
            },
            {
                textTitle:'讨论问题',
                texts:'邀请你参与讨论的问题',
            },
            {
                textTitle:'收藏问题',
            },
            {
                textTitle:'收藏问题',
            },
            {
                textTitle:'收藏问题',
            },
            {
                textTitle:'收藏问题',
            },
            {
                textTitle:'收藏问题',
            },
        ]

        return (
            <View style={styles.tabs}>
                {arr.map((tab, i) => this.renderRow(tab, i))}
            </View>
        );
    }

    render(){
        return(
            <View style={{marginTop:15}}>
                {this.renderRows()}
            </View>
        )
    }
}

const styles=StyleSheet.create({
    items:{
        height:80,
        borderColor:"#ccc",
        borderBottomWidth:1,
        backgroundColor:'#fff'
    },
    texts:{
        marginLeft:20,
    },
    textsTitle:{
        fontSize:15,
        fontWeight:'600',
    },
    view:{
        flex:1,
        marginHorizontal:10,
        alignItems: 'center',
        flexDirection:"row",
    },
})