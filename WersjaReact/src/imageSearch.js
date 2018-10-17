import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
var unirest = require('unirest');

let q = "Donald Tramp";
q = q.replace(" ", "+");

unirest.get("https://contextualwebsearch-websearch-v1.p.mashape.com/api/Search/ImageSearchAPI?autoCorrect=true&count=5&q=" + q)
.header("X-Mashape-Key", "YFT0JGqOoKmshAJI6y129YQoyy5tp1fxCAGjsnNAPVq6hsNP0a")
.header("Accept", "application/json")
.end(function (result) {
  //console.log(result.status, result.headers, result.body);
  setImg(result.body.value);
});

function setImg(imageUrl){
    for(let i = 0; i <  document.getElementsByTagName("img").length; i++){
        document.getElementsByTagName("img")[i].src = imageUrl[i].url;
    }
}