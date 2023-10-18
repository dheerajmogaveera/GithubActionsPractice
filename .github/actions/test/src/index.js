const core = require('@actions/core');

async function run() {
    const secret = process.env.MY_JSON_SECRET;
    console.log("env:",secret);
    const json = JSON.parse(secretText);
    console.log("json:",json);
    core.setOutput('secret', json);
}

run();