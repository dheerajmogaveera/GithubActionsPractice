const core = require('@actions/core');

async function run() {
    const secret = process.env.MY_JSON_SECRET;
    console.log("env:",process.env);
    console.log(secret);
    const json = JSON.parse(secret);
    core.setOutput('secret', json);
}

run();