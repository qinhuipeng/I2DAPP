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
        let data=[2,30,4040,12,0]
        return(
            <TouchableHighlight key={i} underlayColor="#ccc" style={styles.items} onPress={row.onPress}>
                <View style={styles.view}>
                    <Icon
                        name={row.icons} // 图标
                        size={40}
                        color='#6371CF'/>
                    <View style={styles.texts}>
                        <Text style={styles.textsTitle}>{row.textTitle} </Text>
                        {
                            row.texts?
                            <Text>{row.texts} </Text>:
                                null
                        }

                    </View>
                        {
                            data[i]?
                                <View style={styles.tips}>
                                 <Text style={styles.tipsText}>{data[i]}</Text>
                                </View>
                                :
                                null
                        }

                    <View style={styles.right}>
                        <Icon
                            name='ios-arrow-forward' // 图标
                            size={30}/>
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
                icons:'md-share-alt',
                onPress:()=>{
                    navigate('Contacts',{user:'Lucy'})
                },
            },
            {
                textTitle:'发起问题',
                texts:'针对疑问，发起你的问题',
                icons:'md-help-circle',
                onPress:()=>{console.log('2')},
            },
            {
                textTitle:'回答问题',
                texts:'需要你解答的问题',
                icons:'ios-thumbs-up',
                onPress:()=>{console.log('3')},
            },
            {
                textTitle:'讨论问题',
                texts:'邀请你参与讨论的问题',
                icons:'md-chatboxes',
                onPress:()=>{console.log('3')},
            },
            {
                textTitle:'收藏问题',
                icons:'md-list-box',
                onPress:()=>{ navigate('Collection',{user:'Lucy'})},
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
        height:60,
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
    right:{
        position:'absolute',
        right:15,
    },
    tips:{
        position:'absolute',
        right:40,
        backgroundColor:'#ff1d33',
        padding:4,
        borderRadius:10

    },
    tipsText:{
        color:'#fff',

    }
})