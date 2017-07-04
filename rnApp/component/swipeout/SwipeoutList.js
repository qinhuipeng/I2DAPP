/**
 * Created by Administrator on 2017/6/30 0030.
 */
import React, {
    Component,
} from 'react';
import {
    AppRegistry,
    ListView,
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableHighlight,
    View
} from 'react-native';

import { SwipeListView, SwipeRow } from 'react-native-swipe-list-view';

import IconFont from '../IconFont'

class SwipeoutList extends Component {

    constructor(props) {
        super(props);
        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            basic: true,
            listViewData: Array(8).fill('').map((_,i)=>`项目 ${i}`)
        };
    }

    deleteRow(secId, rowId, rowMap) {
        rowMap[`${secId}${rowId}`].closeRow();
        const newData = [...this.state.listViewData];
        newData.splice(rowId, 1);
        this.setState({listViewData: newData});
    }

    render() {
        return (
            <View style={styles.container}>

                    <SwipeListView
                        dataSource={this.ds.cloneWithRows(this.state.listViewData)}
                        renderRow={ data => (
                            <TouchableHighlight
                                onPress={ _ => console.log('You touched me') }
                                style={styles.rowFront}
                                underlayColor={'#CCC'}
                            >
                                <View style={styles.rowItem}>
                                    <IconFont
                                        font="&#xe60f;" // 这是一个导航栏home的图标
                                        style={{fontSize: 30 ,color:'#AAA',marginLeft:20,marginRight:10}}
                                    />
                                    <Text style={styles.textItem}> {data} </Text>
                                </View>
                            </TouchableHighlight>
                        )}
                        renderHiddenRow={ (data, secId, rowId, rowMap) => (
                            <View style={styles.rowBack}>
                                <Text>Left</Text>
                                <View style={[styles.backRightBtn, styles.backRightBtnLeft]}>
                                    <Text style={styles.backTextWhite}>编辑</Text>
                                </View>
                                <TouchableOpacity style={[styles.backRightBtn, styles.backRightBtnRight]} onPress={ () => this.deleteRow(secId, rowId, rowMap) }>
                                    <Text style={styles.backTextWhite}>删除</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                        disableRightSwipe={true}
                        stopLeftSwipe={150}
                        rightOpenValue={-150}
                    />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    standalone: {
        marginTop: 30,
        marginBottom: 30,
    },
    standaloneRowFront: {
        alignItems: 'center',
        backgroundColor: '#CCC',
        justifyContent: 'center',
        height: 50,
    },
    standaloneRowBack: {
        alignItems: 'center',
        backgroundColor: '#8BC645',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15
    },
    backTextWhite: {
        color: '#FFF'

    },
    rowFront: {
        backgroundColor: '#fff',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        justifyContent: 'center',
        height: 50,
    },
    rowItem:{
        flex:1,
        flexDirection:'row',
        alignItems: 'center',
    },
    textItem:{
        color:'#3F3F3F',
        fontSize: 16,
    },
    rowBack: {
        alignItems: 'center',
        backgroundColor: '#DDD',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
    },
    backRightBtn: {
        alignItems: 'center',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width: 75
    },
    backRightBtnLeft: {
        backgroundColor: '#6371CF',
        right: 75
    },
    backRightBtnRight: {
        backgroundColor: '#FF5656',
        right: 0
    },
    controls: {
        alignItems: 'center',
        marginBottom: 30
    },
    switchContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 5
    },
    switch: {
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        paddingVertical: 10,
        width: 100,
    }
});

export default SwipeoutList;