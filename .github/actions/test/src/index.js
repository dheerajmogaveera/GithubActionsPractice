import core from '@actions/core';
import test from '../../../../helper/helper.js';
async function run() {
    const json = test();
    //testing
    core.setOutput('secret', json);
}

run();
