const axios = require('axios');
const Apify = require('apify');

var asi = 'https://core.subsplash.com/accounts/v1/app-store-infos/P5G6Q5'
var jwt = process.env.accounts

function updateASI(url) {
    let data = {
        secondary_app_title: 'test title'
    }
    let headers = {
        Authorization: 'Bearer ' + jwt
    }

    axios.patch(url, data, headers)
        .then(response => {
            console.log(response)
        })
        .catch(err => console.log(err.response))
}

// Apify.main(() => {
// });
function getASI(url) {
    let headers = {
        Authorization: 'Bearer ' + jwt
    }

    axios.get(url, headers)
        .then(response => {
            console.log(response)
        })
        .catch(err => console.log(err.response))
}
getASI(asi)
updateASI(asi)
