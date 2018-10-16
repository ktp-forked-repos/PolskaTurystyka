
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
let https = require('https');

let subscriptionKey = '9f8f917cc9e04207b10b39a8304420f1';

let host = 'api.cognitive.microsoft.com';
let path = '/bing/v7.0/images/search/';
let term = 'house';

let response_handler = function (response) {
    let body = '';
    response.on('data', function (d) {
        body += d;
    });
    response.on('end', function () {
        let imageResults = JSON.parse(body);
        if (imageResults.value.length > 0) {
            let firstImageResult = imageResults.value[0];
            // console.log(`Image result count: ${imageResults.value.length}`);
            // console.log(`First image insightsToken: ${firstImageResult.imageInsightsToken}`);
            //console.log(`First image thumbnail url: ${firstImageResult.thumbnailUrl}`);
            // console.log(`First image web search url: ${firstImageResult.webSearchUrl}`);
            setImg(`${firstImageResult.thumbnailUrl}`);
        }
        else {
            console.log("Couldn't find image results!");
        }
    });
    response.on('error', function (e) {
        console.log('Error: ' + e.message);
    });
};

let bing_image_search = function (search) {
  console.log('Searching images for: ' + term);
  let request_params = {
        method : 'GET',
        hostname : host,
        path : path + '?q=' + encodeURIComponent(search),
        headers : {
            'Ocp-Apim-Subscription-Key' : subscriptionKey,
        }
    };

    let req = https.request(request_params, response_handler);
    req.end();
}

if (subscriptionKey.length === 32) {
    bing_image_search(term);
} else {
    console.log('Invalid Bing Search API subscription key!');
    console.log('Please paste yours into the source code.');
}

function setImg(imageUrl){
    for(let i = 0; i <  document.getElementsByTagName("img").length; i++){
        document.getElementsByTagName("img")[i].src = imageUrl;
    }
}