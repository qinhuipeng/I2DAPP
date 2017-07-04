/**
 * Created by Administrator on 2017/6/28 0028.
 */


import React, { Component } from 'react'
import {
    Text,
    View,
    Image,
    AsyncStorage,
    Dimensions
} from 'react-native'
import Swiper from 'react-native-swiper'
import ConfirmButton from './ConfirmButton'
const { width,height } = Dimensions.get('window')

const styles = {
    wrapper: {
        flex: 1,
    },

    slide: {
        flex: 1,
        backgroundColor: 'transparent'
    },

    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },


    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },

    image: {
        width,
        flex: 1
    },
    dot:{
        backgroundColor: 'transparent',
        width: 14,
        height: 14,
        borderRadius: 7,
        borderWidth:1,
        borderColor:'#8a58ff',
        marginLeft: 3,
        marginRight: 3,
        marginTop: 3,
        marginBottom: 13
    },
    activeDot:{
        backgroundColor: '#8a58ff',
        borderWidth:1,
        borderColor:'#8a58ff',
        width: 14,
        height: 14,
        borderRadius: 7,
        marginLeft: 3,
        marginRight: 3,
        marginTop: 3,
        marginBottom: 13
    }
}

export default class extends Component {

    constructor(prop){
        super(prop);

        this.state={
            banner:[
                require('../../images/slider/1.jpg'),
                require('../../images/slider/2.jpg'),
                require('../../images/slider/3.jpg')
        ]}
        this._enters = this._enters.bind(this);

    }

     _enters(){
         AsyncStorage.setItem('enters','yes')
        this.props.enterSlide();
    }

    render () {
        return (
            <View>
                <Swiper style={styles.wrapper} height={height}
                        onMomentumScrollEnd={(e, state, context) => console.log('index:', state.index)}
                        dot={<View style={styles.dot} />}
                        activeDot={<View style={styles.activeDot} />}
                        paginationStyle={{

                        }} loop={false}>
                    <View style={styles.slide} title={<Text numberOfLines={1}>Aussie tourist dies at Bali hotel</Text>}>
                        <Image resizeMode='stretch' style={styles.image} source={this.state.banner[0]} />
                    </View>
                    <View style={styles.slide} title={<Text numberOfLines={1}>Big lie behind Nine’s new show</Text>}>
                        <Image resizeMode='stretch' style={styles.image} source={this.state.banner[1]} />
                    </View>
                    <View style={styles.slide} title={<Text numberOfLines={1}>Why Stone split from Garfield</Text>}>
                        <Image resizeMode='stretch' style={styles.image} source={this.state.banner[2]} />
                        <ConfirmButton onPress={this._enters} buttonStyle={{position:'absolute',bottom:70}} enable={true} text={'马上体验'}/>
                    </View>
                </Swiper>
            </View>
        )
    }
}