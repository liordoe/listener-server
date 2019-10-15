'use strict';

const path = require('path');
const fs = require('fs');
const semver = require('semver');

const projectJsonPath = path.join(process.env.PWD, 'package.json');
const { engines: { node: version } } = JSON.parse(fs.readFileSync(projectJsonPath, 'utf-8'));

if (!semver.satisfies(process.version, version)) {
    throw new Error(
        `The current node version${process.version} does not satisfy the required version ${version} .`
    );
}
