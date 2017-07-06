/**
 * Created by Administrator on 2017/6/25 0025.
 */

import React,{Component} from 'react';
import { StyleSheet, View,Dimensions } from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';


var width= Dimensions.get('window').width;
var height= Dimensions.get('window').height;

export default class AddNextButton extends Component{
    constructor(prop){
        super(prop)
    }

    render() {
        return (
            <View style={{flex:1, backgroundColor: '#f3f3f3'}}>
                {/* Rest of the app comes ABOVE the action button component !*/}
                <ActionButton position='center' active={true} buttonColor="rgba(231,76,60,1)">
                    <ActionButton.Item spaceBetween={30} buttonColor='#9b59b6' title="New Task" onPress={() => console.log("notes tapped!")}>
                        <Icon name="md-create" color="#fff" size={30}  style={styles.actionButtonIcon} />
                    </ActionButton.Item>
                    <ActionButton.Item spaceBetween={30} buttonColor='#3498db' title="Notifications" onPress={() => {}}>
                        <Icon name="md-notifications-off" color="#fff" size={30}  style={styles.actionButtonIcon} />
                    </ActionButton.Item>
                    <ActionButton.Item spaceBetween={30} buttonColor='#1abc9c' title="All Tasks" onPress={() => {}}>
                        <Icon name="md-done-all" color="#fff" size={30} style={styles.actionButtonIcon} />
                    </ActionButton.Item>
                </ActionButton>
            </View>
        );
    }

}

const styles = StyleSheet.create({
});
