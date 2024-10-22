import pkg from "../package.json";

export const configApp = {
  name: "react-vlibras-plugin",
  npm: "https://www.npmjs.com/package/react-vlibras-plugin",
  github: "https://github.com/criar-art/react-vlibras-plugin",
  appVersion: pkg.version,
  reactVersion: pkg.dependencies.react.replace('^', ''),
  stepsInstall: [
    {
      name: 'Install',
      language: 'bash',
      content: 'npm install react-vlibras-plugin',
    },
    {
      name: 'Usage',
      language: 'tsx',
      content: `import ReactVLibras from 'react-vlibras-plugin'

<ReactVLibras position="left" />`,
    },
  ],
}
