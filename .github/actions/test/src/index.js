import { core } from '@actions/core';
import test from '../../../../helper/helper';
async function run() {
    const json = test();
    core.setOutput('secret', json);
}

run();