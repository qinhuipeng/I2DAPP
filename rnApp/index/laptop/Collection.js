/**
 * Created by Administrator on 2017/6/18 0018.
 */
import React,{Component} from 'react';
import{
    View,
    Dimensions
} from 'react-native';

import Header from  '../../include/header';
import PartList from '../../List/PartList';
import Problem from '../../List/Problem';


import ScrollableTabView from 'react-native-scrollable-tab-view';

var width= Dimensions.get('window').width;
var height= Dimensions.get('window').height;
export default  class Collection extends Component {
    render() {
        return (
            <View>
                <Header title="收藏夹"></Header>
                <View style={{width:width,height:height}}>
                    <ScrollableTabView tabBarUnderlineStyle={{backgroundColor:"transparent",height:0}}
                                       tabBarTextStyle={{lineHeight:30}}
                                       tabBarActiveTextColor ={'#6371CF'}>
                        <PartList navigation={this.props.navigation}   tabLabel="设计" />
                        <Problem navigation={this.props.navigation}  tabLabel="问题" />
                    </ScrollableTabView>
                </View>
            </View>


        )
    };


}
