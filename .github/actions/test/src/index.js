const core = require('@actions/core');

async function run() {
    const secret = process.env.MY_JSON_SECRET;
    const secretText = secret.replace(/\*\*\*/g, '{').replace(/\*\*\*/g, '}');
    console.log("env:",secretText);
    const json = JSON.parse(secretText);
    console.log("json:",json);
    core.setOutput('secret', json);
}

run();