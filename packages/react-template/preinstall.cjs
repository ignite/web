/* eslint-env node */
const pkgjson = require("./package.json");
var spawnSync = require("child_process").spawnSync;

for (let pkg in pkgjson.dependencies) {
  if (pkgjson.dependencies[pkg].startsWith("file:")) {
    let relPath = pkgjson.dependencies[pkg].substring(5);
    console.log(`PRE-INSTALL Installing & building ${pkg} prior to webapp install`);
    spawnSync("npm", ['install'], {cwd: relPath, stdio: "inherit" });
    spawnSync("npm", ['run','build'], {cwd: relPath, stdio: "inherit" });
  }
}
