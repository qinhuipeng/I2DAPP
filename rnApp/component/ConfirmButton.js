import React, {
    Component
} from 'react'

import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    TouchableOpacity,
} from 'react-native'
const { width,height } = Dimensions.get('window')
export default class ConfirmButton extends Component {
    //使用时：enable是必须存在的
    static propTypes = {
        enable: React.PropTypes.bool.isRequired,
    };

    render() {
        return (
            <View>
                {this._renderButton()}
            </View>
        );
    }

    _renderButton() {
        //可点击与不点击样式不同
        if (this.props.enable===true) {
            return(
                <TouchableOpacity
                    onPress={this.props.onPress}
                    underlayColor={this.props.underlayColor}
                    style={[styles.button, this.props.buttonStyle]}>
                  <View style={styles.viewText}>
                    <Text style={[styles.textMeg, this.props.textStyle]}>{this.props.text}</Text>
                  </View>
                </TouchableOpacity>
            );
        } else {
            return(
                <View style={[styles.button, this.props.buttonStyle, styles.buttonNotEnable]}>
                  <View style={styles.viewText}>
                    <Text style={styles.textMeg}>{this.props.text}</Text>
                  </View>
                </View>
            );
        }
    }

}

const styles = StyleSheet.create({
    viewText: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textMeg: {
        color: 'white',
        fontSize: 14,
    },
    button: {
        width:width-50,
        marginLeft:25,
        height: 44,
        borderRadius: 4,
        backgroundColor: '#6371CF',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonNotEnable: {
        backgroundColor: '#B8B8B8',
    }
});