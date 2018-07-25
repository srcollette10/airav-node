'use strict'

const request = require('request')

const googlecloudvision = {
    ping: () => {
        request('https://vision.googleapis.com/$discovery/rest?version=v1', function (error, response, body) {
            console.log('error:', error); // Print the error if one occurred
            console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
            console.log('body:', body); // Print the HTML for the Google homepage.
        });
    }

}
module.exports = googlecloudvision