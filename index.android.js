import React, { Component } from 'react';
import { AppRegistry£¬Text, Dimensions, View } from 'react-native';
import Header from './rnApp/include/header';
import RegisterTab from './rnApp/account/registerTab';
import Login from './rnApp/account/login';
import rootApp from './rnApp/rootApp';
import navigator from './rnApp/navigator';

var width= Dimensions.get('window').width;
var height= Dimensions.get('window').height;

AppRegistry.registerComponent('I2DAPP_RN', () => navigator);
