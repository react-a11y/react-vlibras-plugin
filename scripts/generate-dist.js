import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import jsonminify from 'jsonminify';

// Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Resolve the output directory path
const outputDir = path.resolve(__dirname, '../dist');

// Read the current package.json
const pkg = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../package.json'), 'utf-8'));

// Modify the package.json for the dist folder
const distPackageJson = {
  name: pkg.name,
  version: pkg.version,
  author: pkg.author,
  description: pkg.description,
  repository: pkg.repository,
  bugs: pkg.bugs,
  private: false,
  type: "module",
  keywords: pkg.keywords,
  peerDependencies: {
    react: '^17.0.0 || ^18.0.0',
  },
  files: [
    'react-vlibras-plugin.js',
    'react-vlibras-plugin.d.ts'
  ],
  main: './react-vlibras-plugin.js',
  types: './react-vlibras-plugin.d.ts',
  exports: {
    ".": {
      "import": './react-vlibras-plugin.js',
      "require": './react-vlibras-plugin.js'
    }
  }
};

// Minify the modified package.json
const minifiedJson = jsonminify(JSON.stringify(distPackageJson, null, 2));

// Write the minified package.json to the dist folder
fs.writeFileSync(
  path.join(outputDir, 'package.json'),
  minifiedJson
);

console.log('Minified dist package.json generated successfully.');

// Optionally copy README
fs.copyFileSync(path.resolve(__dirname, '../README.md'), path.join(outputDir, 'README.md'));
console.log('README.md copied to dist.');

// Optionally copy declaration file
fs.copyFileSync(path.resolve(__dirname, '../src/react-vlibras-plugin.d.ts'), path.join(outputDir, 'react-vlibras-plugin.d.ts'));
console.log('react-vlibras-plugin.d.ts copied to dist.');
