const core = require('@actions/core');

async function run() {
    const secret = process.env.MY_JSON_SECRET;
    console.log("env:",process.env);
    const json = JSON.parse(secret);
    console.log("json:",json);
    core.setOutput('secret', json);
}

run();