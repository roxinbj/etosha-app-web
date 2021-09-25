/* eslint-disable no-console */
const execa = require("execa");
const fs = require("fs");
(async () => {
  try {
    console.log("Push changes first...");
    await execa("git", ["add", "."]);
    await execa("git", ["commit", "-m","\"Deployment\""]);
    await execa("git", ["push"]);
    await execa("git", ["checkout", "--orphan", "gh-pages"]);
    // eslint-disable-next-line no-console
    console.log("Clean started...");
    await execa("quasar", ["clean"]);
    console.log("Building started...");
    await execa("quasar", ["b","-P"]);
    // Understand if it's dist or build folder
    await execa("cp", ["_redirects","dist/spa/_redirects"]);
    const folderName = fs.existsSync("dist/spa") ? "dist/spa" : "build";
    await execa("git", ["--work-tree", folderName, "add", "--all"]);
    await execa("git", ["--work-tree", folderName, "commit", "-m", "gh-pages"]);
    console.log("Pushing to gh-pages...");
    await execa("git", ["push", "origin", "HEAD:gh-pages", "--force"]);
    await execa("rm", ["-r", folderName]);
    await execa("git", ["checkout", "-f", "master"]);
    await execa("git", ["branch", "-D", "gh-pages"]);
    console.log("Successfully deployed, check your settings");
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e.message);
    process.exit(1);
  }
})();