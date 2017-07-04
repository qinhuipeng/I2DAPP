/**
 * Created by Administrator on 2017/6/22 0022.
 */
'use strict';

import React, {Component} from 'react';

import {
    StyleSheet,
    View,
    TouchableHighlight,
    Text
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

class CustomTabBar extends Component {

    constructor(prop){
        super(prop);

    }
    static propTypes = {
        goToPage: React.PropTypes.func, // 跳转到对应tab的方法
        activeTab: React.PropTypes.number, // 当前被选中的tab下标
        tabs: React.PropTypes.array, // 所有tabs集合

        tabNames: React.PropTypes.array, // 保存Tab名称
        tabIconNames: React.PropTypes.array, // 保存Tab图标
    }


    renderTabOption(tab, i) {
        let color = this.props.activeTab == i ? "#6371CF" : "#ADADAD"; // 判断i是否是当前选中的tab，设置不同的颜色
        const { navigate } = this.props.navigation;
        return (
            i===2?
                <TouchableHighlight underlayColor="#FFF" key={i} onPress={
                    ()=>{
                        navigate('AddNextButton',{user:'Lucy'})
                    }
                } style={styles.tab}>
                    <View style={styles.tabItem}>
                        <Icon
                            name={this.props.tabIconNames[i]} // 图标
                            size={i==2?40:30}
                            color={color}/>
                        <Text style={{color: color,fontSize:12}}>
                            {this.props.tabNames[i]}
                        </Text>
                    </View>
                </TouchableHighlight>
                :
                <TouchableHighlight underlayColor="#FFF" key={i} onPress={()=>this.props.goToPage(i)} style={styles.tab}>
                    <View style={styles.tabItem}>
                        <Icon
                            name={this.props.tabIconNames[i]} // 图标
                            size={i==2?40:30}
                            color={color}/>
                        <Text style={{color: color,fontSize:12}}>
                            {this.props.tabNames[i]}
                        </Text>
                    </View>
                </TouchableHighlight>
        );
    }

    render() {
        return (
            <View style={styles.tabs}>
                {this.props.tabs.map((tab, i) => this.renderTabOption(tab, i))}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    tabs: {
        flexDirection: 'row',
        height: 50,
        backgroundColor:'#FFF',
        borderTopWidth:1,
        borderTopColor:"#ccc",
    },

    tab: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    tabItem: {
        flexDirection: 'column',
        alignItems: 'center',
    },
});


export default CustomTabBar;
