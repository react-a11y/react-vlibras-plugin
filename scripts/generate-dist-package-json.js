import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const outputDir = path.resolve(__dirname, '../dist');

// Read the current package.json
const pkg = JSON.parse(fs.readFileSync('./package.json', 'utf-8'));

// Modify the package.json for the dist folder
const distPackageJson = {
  name: pkg.name,
  version: pkg.version,
  private: false,
  type: "module",
  peerDependencies: {
    react: '^17.0.0 || ^18.0.0',
  },
  files: pkg.files,
  main: pkg.main,
  exports: pkg.exports,
};

// Write the new package.json to the dist folder
fs.writeFileSync(
  path.join(outputDir, 'package.json'),
  JSON.stringify(distPackageJson, null, 2)
);

// Copy the README.md file to the dist folder
const readmePath = path.resolve(__dirname, '../README.md');
const distReadmePath = path.join(outputDir, 'README.md');

fs.copyFileSync(readmePath, distReadmePath);

console.log('Dist package.json generated successfully.');
