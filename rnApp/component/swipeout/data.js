/**
 * Created by Administrator on 2017/6/30 0030.
 */
import React from 'react';
import {Image} from 'react-native';

var btnsDefault = [ { text: 'Button' } ];

var btnsTypes = [
    { text: '编辑',    type: 'primary',   },
    { text: '删除',     type: 'delete',    }
];
var rows=[
    {
        text: "项目A",
        right: btnsTypes,
        autoClose: true,
    },
    {
        text: "项目B",
        right: btnsTypes,
        autoClose: true,
    },
    {
        text: "项目C",
        right: btnsTypes,
        autoClose: true,
    },
    {
        text: "项目D",
        right: btnsTypes,
        autoClose: true,
    },
    {
        text: "项目E",
        right: btnsTypes,
        autoClose: true,
    },
    {
        text: "项目F",
        right: btnsTypes,
        autoClose: true,
    }
]
// var rows = [
//     {
//         text: "Basic Example",
//         right: btnsDefault,
//     },
//     {
//         text: "onPress Callback",
//         right: [
//             {
//                 text: 'Press Me',
//                 onPress: function(){ alert('button pressed') },
//                 type: 'primary',
//             }
//         ],
//     }, {
//         text: "项目A",
//         right: btnsTypes,
//     }, {
//         text: "Button with custom styling",
//         right: [
//             {
//                 text: 'Button',
//                 backgroundColor: '#4fba8a',
//                 color: '#17807a',
//                 underlayColor: "#006fff",
//             }
//         ],
//     },
//     {
//         text: "Overswipe background color (drag me far)",
//         right: btnsDefault,
//         backgroundColor: '#006fff',
//     }, {
//         text: "Swipeout autoClose={true}",
//         right: btnsDefault,
//         autoClose: true,
//     }, {
//         text: "Five buttons (full-width) + autoClose={true}",
//         right: [
//             { text: 'One'},
//             { text: 'Two'},
//             { text: 'Three' },
//             { text: 'Four' },
//             { text: 'Five' }
//         ],
//         autoClose: true,
//     }, {
//         text: "Custom button component",
//         right: [
//             {
//                 component: <Image style={{flex: 1}} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}} />
//             }
//         ],
//     }, {
//         text: "Swipe me right (buttons on left side)",
//         left: btnsDefault,
//     }, {
//         text: "Buttons on both sides",
//         left: btnsTypes,
//         right: btnsTypes,
//     },
// ];

export default rows;