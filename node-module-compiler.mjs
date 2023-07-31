import * as esbuild from "esbuild";
import * as readline from "readline";

const readlineInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let source = "",
  target = "";

readlineInterface.question("Enter the module name: ", (/** @type {string} */ moduleName) => {
  source = moduleName;

  readlineInterface.question("Enter the output file path: ", (/** @type {string} */ outputFile) => {
    target = outputFile;
    const options = {
      entryPoints: [`./node_modules/${source}/index.js`],
      outfile: target,
      external: [source],
      bundle: true,
    };

    console.dir(options);

    readlineInterface.question("Please confirm by pressing y:", (/** @type {string} */ confirmation) => {
      if (confirmation !== "y") throw new Error("User did not confirm");
      esbuild.build(options);
    });
  });
});
