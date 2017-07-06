/**
 * 用户登录Action操作
 */
'use strict';

import * as types from '../common/ActionTypes';
import FetchHttpClient, { form,header } from 'fetch-http-client';
import {HOST,LOGIN_ACTION} from  '../common/Request';
import { toastShort } from '../utils/ToastUtil';
import NetUtil from '../utils/NetUtil';

export function performLoginAction(username,password){
     return dispatch => {
        dispatch(performLogin());

         let formData = new FormData();
         formData.append("verifyCode","3232");
         formData.append("userName",'admin@test6');
         formData.append("passWord",password);
         NetUtil.postJson(HOST+LOGIN_ACTION,formData,(responseText) => {
             console.log(responseText)
             let obj= JSON.parse(responseText);
             dispatch(receiveLoginResult(obj));
             // if(obj.success){
             //     dispatch(receiveLoginResult(obj));
             // }else{
             //     toastShort(obj.message);
             // }
         });

     }
}

function performLogin() {
        return {
            type: types.PERFORM_LOGIN_ACTION,
        }
}

function receiveLoginResult(result){
        return {
            type: types.RECEIVE_LOGIN_ACTION,
            data: result
        }

}