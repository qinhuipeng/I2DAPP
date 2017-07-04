/**
 * Created by Administrator on 2017/6/29 0029.
 */
'use strict'
import React, {Component} from 'react';
import {
    Image,
    StyleSheet,
    View,
    Animated,
    Dimensions
} from 'react-native';
const { width,height } = Dimensions.get('window')

export default class WelcomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fadeAnim:new Animated.Value(0),
        };
    }

    componentDidMount(){
        Animated.timing(
            this.state.fadeAnim,
            {
                toValue:1,
                duration:3500,
            }
        ).start();
    }

    render(){
        return(
            <Animated.View
                style={{
                    opacity: this.state.fadeAnim,
                }}>
                <Image  source={require('../../images/c.jpg')} style={{width:width,height:height}} >
                </Image>
            </Animated.View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff'
    },
    img: {
        flex: 1,
        width: 400,
        height: 200,
        resizeMode: 'contain'
    }
})
