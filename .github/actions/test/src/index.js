const core = require('@actions/core');

async function run() {
    const secret = core.getInput('value', { required: true });
    console.log("env:",secret);
    const json = JSON.parse(secret);
    console.log("json:",json);
    core.setOutput('secret', json);
}

run();