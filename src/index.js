const core = require('@actions/core');
const crypto = require('crypto');

async function run() {
    try{
        const secrets = core.getInput('secrets');
        const token = core.getInput('github-token');
        const initializationVector = core.getInput('initialization-vector');

        const key = Buffer.from(token.slice(0, 32), 'utf8');
        const iv = Buffer.from(initializationVector.slice(0, 16), 'utf8');
        const cipher = crypto.createCipheriv('aes256', key, iv);

        const encryptedSecrets = cipher.update(secrets, 'utf8', 'hex');
        core.setOutput('encrypted-secret', encryptedSecrets);
    } catch (error) {
        core.setFailed(error.message);
    }
}

run();
