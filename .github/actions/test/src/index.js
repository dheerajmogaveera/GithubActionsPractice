const core = require('@actions/core');

async function run() {
    const secret = process.env.MY_JSON_SECRET;
    let bufferObj = Buffer.from(secret, "base64");
    let decodedString = bufferObj.toString("utf8");
    console.log("env secret:", decodedString);
    const json = JSON.parse(decodedString);
    console.log("json:", json);
    core.setOutput('secret', json);
}

run();