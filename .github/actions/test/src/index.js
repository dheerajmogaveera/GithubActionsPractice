const core = require('@actions/core');
const test = require('../../../../helper/helper');
async function run() {
    const json = test();
    core.setOutput('secret', json);
}

run();