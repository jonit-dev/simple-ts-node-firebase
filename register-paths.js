const path = require("path");
const tsConfig = require("./tsconfig.json");
const tsConfigPaths = require("tsconfig-paths");

const baseUrl = tsConfig.compilerOptions.baseUrl || ".";
const outDir = tsConfig.compilerOptions.outDir || ".";

const env = process.env.ENV;

let baseUrlPath;
if (env === "Production" || env === "Staging") {
  baseUrlPath = path.resolve(outDir, baseUrl);
} else {
  baseUrlPath = baseUrl;
}

const explicitParams = {
  baseUrl: baseUrlPath,
  paths: tsConfig.compilerOptions.paths,
};
tsConfigPaths.register(explicitParams);

// cleanup();
