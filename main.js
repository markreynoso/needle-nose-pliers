const axios = require('axios');
const Apify = require('apify');

let asi = 'https://core.subsplash.com/accounts/v1/app-store-infos/P5G6Q5'
let jwt = process.env.accounts

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
    console.log(headers)
    axios.get(url, {headers})
        .then(response => {
            console.log(response)
        })
        .catch(err => console.log(err.response))
}
getASI(asi)
// updateASI(asi)
