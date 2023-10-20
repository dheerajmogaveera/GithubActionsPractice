const core = require('@actions/core');
const test = require('../../../../helper/helper.js');
async function run() {
    const json = test();
    core.setOutput('secret', json);
}

run();