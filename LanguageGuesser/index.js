const franc = require('franc');
const langs = require('langs');
const colors = require('colors')
const input = process.argv[2];
const langCode = franc(input);
if (langCode === 'und') {
    console.log("Sorry!! Couldn't find this!! Use some more sample text");
} else {
    const language = langs.where("3", langCode);
    console.log(`Our best guess is : ${language.name.green}`);
}
