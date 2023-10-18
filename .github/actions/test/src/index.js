const core = require('@actions/core');

export async function run() {
    const secret = process.env.MY_JSON_SECRET;
    console.log(secret);
    const json = JSON.parse(secret);
    core.setOutput('secret', json);
}

run();