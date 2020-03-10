const axios = require('axios');
const Apify = require('apify');

var asi = 'https://core.subsplash.com/accounts/v1/app-store-infos/P5G6Q5'
var jwt = process.env.accounts

function updateASI(url) {
    console.log('url')
    console.log(url)
    let data = JSON.stringify({
        secondary_app_title: 'test title'
    })
    console.log(jwt)
    let headers = {
        'Authorization': 'Bearer ' + jwt
    }

    axios.post(url, data, headers)
        .then(response => {
            console.log(response)
        });
}

Apify.main(async () => {
    console.log('start')
    updateASI(asi)
});
