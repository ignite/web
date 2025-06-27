const semver = require('semver');
const fs = require('fs');
const lerna = require('./lerna.json');
const templatePkg = require('./packages/vue-template/package.json');
const bumped = semver.parse(lerna.version, { loose: true }).inc('minor').version;
templatePkg.devDependencies['@ignt/vue-library'] = `^${bumped}`;

fs.writeFileSync('./pacgages/vue-template/package.json', JSON.stringify(templatePkg, null, 2));
console.log(`Bumped @ignt/vue-library to version ${bumped} in vue-template package.json`);