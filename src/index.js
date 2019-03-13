import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import request from 'request';
import { load } from 'cheerio';

// var url = "http://www.uplus.co.kr/ent/spps/chrg/RetrieveChrgList.hpi?catgCd=All&mid=11014";
var url = "http://lcdev131.mobigo.co.kr";
// var url = "https://product.kt.com/wDic/index.do?CateCode=6002";
var oArrItem = [];
request(url, function (err, res, html) {
    if (!err) {
        console.warn(res);
        console.warn(html);
        var $ = load(html);
        oArrItem = [];
        var planList = $(".plan-list").length;
        console.timeLog(planList);
        console.log($(".plan-list-area").find(".plan-list").length);
        // 블로그 title 정보 가져오기
        $(".plan-list-area").find(".plan-list").find("tr").each(function () {   
            let item = {};
            item.title = $(this).find(".title").find("strong").text();
            item.charge = $(this).find(".charge").find("strong").text();
            oArrItem.push(item);
        });
        console.log(oArrItem);
    }else{
        console.warn(err);
    }
})
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
