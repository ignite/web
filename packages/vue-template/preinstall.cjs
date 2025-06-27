/* eslint-env node */
const pkgjson = require("./package.json");
var spawnSync = require("child_process").spawnSync;

for (let pkg in pkgjson.dependencies) {
  if (pkgjson.dependencies[pkg].startsWith("file:")) {
    let relPath = pkgjson.dependencies[pkg].substring(5);
    console.log(`PRE-INSTALL Installing & building ${pkg} prior to webapp install`);
    spawnSync("pnpm", ["install"], { cwd: relPath, stdio: "inherit" });
    spawnSync("pnpm", ["build"], { cwd: relPath, stdio: "inherit" });
  }
}
