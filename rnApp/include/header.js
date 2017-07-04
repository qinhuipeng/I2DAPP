/**
 * Created by Administrator on 2017/6/18 0018.
 */
import React,{Component} from 'react';
import{
    Text,
    StyleSheet,
    View
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';


export default  class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <View style={[styles.header,this.props.headerStyle]}>
                    <Icon style={styles.headerIcon} color={this.props.iconColor?this.props.iconColor:null} size={32} name='angle-left'
                          onPress={this.props.onPress}
                    />
                    <Text style={[styles.headerText,this.props.textStyle]}>{this.props.title}</Text>
                </View>
            </View>
        )
    };


}


const styles = StyleSheet.create({
    header: {
        height: 60,
        padding: 10,
        justifyContent:'center'
    },
    headerIcon: {
        position: 'absolute',
        left: 10
    },
    headerText: {
        fontFamily: 'PingFangSC-Regular',
        fontSize: 16,
        textAlign: 'center',
        color: '#7E7E7E'
    },
});