import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
var unirest = require('unirest');

let q = "Rynek Główny w Krakowie";
q = encodeURIComponent(q);

console.log(q);


unirest.get("https://api.shutterstock.com/v2/images/search?height_from=600&language=pl&orientation=horizontal&per_page=5&query="+q+"&sort=popular&view=full")
.header("Authorization", "Bearer 1/eyJjbGllbnRfaWQiOiIyMGFhMWMwYjM2ZGM4NmEyZjliMyIsInJlYWxtIjoiY3VzdG9tZXIiLCJzY29wZSI6InVzZXIudmlldyIsInV0diI6IjNpWnUiLCJ1c2VybmFtZSI6ImZpbGlwcmFja2lpNzUiLCJ1c2VyX2lkIjoyMTcwMjgxOTMsIm9yZ2FuaXphdGlvbl9pZCI6bnVsbCwib3JnYW5pemF0aW9uX3VzZXJfaWQiOm51bGwsInBhcmVudF9vcmdhbml6YXRpb25faWRzIjpbXSwiY3VzdG9tZXJfaWQiOjIxNzAyODE5MywiZXhwIjoxNTM5Nzc4ODEyfQ.jhtz2eUEAys9RtuDMOVHLv1ccCcbebruYd_OO47FpESbGhfKBAWzcfJx2ai3EyYRTHWYx3CHpetY8RRBxKuqQw")
//.header("Accept", "application/json")
.end(function (result) {
  //console.log(result.status, result.headers, result.body);
  console.log(result.body.data);
  setImg(result.body.data);
});

function setImg(imageUrl){
    for(let i = 0; i <  document.getElementsByTagName("img").length; i++){
        document.getElementsByTagName("img")[i].src = imageUrl[i].assets.huge_thumb.url;
    }
}