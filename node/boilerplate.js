const fs = require('fs');

const directoryName = process.argv[2];
fs.mkdirSync(directoryName, { recursive: true },
);
fs.writeFileSync(`${directoryName}/index.html`, '')
fs.writeFileSync(`${directoryName}/app.js`, '')
fs.writeFileSync(`${directoryName}/styles.css`, '')
