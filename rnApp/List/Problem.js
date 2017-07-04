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


export default class PartList extends Component{
    constructor(prop){
        super(prop)
    }

    renderRow(row,i){
        return(
            <TouchableHighlight key={i} underlayColor="#ccc" style={styles.items} onPress={row.onPress}>
                <View style={styles.view}>


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
            },
            {
                textTitle:'发起问题',
                texts:'针对疑问，发起你的问题',
                icons:'md-help-circle',
            },
            {
                textTitle:'回答问题',
                texts:'需要你解答的问题',
                icons:'ios-thumbs-up',
            },
            {
                textTitle:'讨论问题',
                texts:'邀请你参与讨论的问题',
                icons:'md-chatboxes',
            },
            {
                textTitle:'收藏问题',
                icons:'md-list-box',
            },
        ]

        return (
            <View>
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

})