const request = require('../request');
const util = require('../util');

async function login({ username, password, url })
{
    console.log(`'${username}' for '${url}' is using viescolaire login`);

    let html = await request.http({
        url: url + 'viescolaire.html?login=true',
        method: 'GET'
    });

    return util.extractStart(html);
}

module.exports = login;
