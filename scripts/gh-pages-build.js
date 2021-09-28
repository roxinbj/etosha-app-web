/* eslint-disable no-console */
const execa = require("execa");
const fs = require("fs");
(async () => {
  try {
    // eslint-disable-next-line no-console
    console.log("Clean started...");
    await execa("quasar", ["clean"]);
    console.log("Building started...");
    await execa("quasar", ["build"]);
    // Understand if it's dist or build folder
    console.log("Copy started...");
    await execa("cp", ["_redirects","dist/spa/_redirects"]);
    console.log("Successfully build");
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e.message);
    process.exit(1);
  }
})();