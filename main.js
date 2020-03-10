const axios = require('axios');
const Apify = require('apify');

var asi = 'https://core.subsplash.com/accounts/v1/app-store-infos/P5G6Q5'
var jwt = process.env.accounts

function updateASI(url) {
    console.log('start')
    let data = {
        secondary_app_title: 'test title'
    }
    let headers = {
        Authorization: 'Bearer ' + jwt
    }
    console.log(data)
    console.log(headers)
    axios.get(url, headers).then(res => console.log(res))

    axios.patch(url, data, headers)
        .then(response => {
            console.log(response)
        })
        .catch(err => console.log(err.response))
}

Apify.main(async () => {
    updateASI(asi)
});
