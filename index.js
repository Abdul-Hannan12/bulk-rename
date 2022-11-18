const prompt = require("prompt-sync")({ sigint: true });
const {renameFiles} = require('./rename');

// const readline = require('readline');
// const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
// const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
// rl.close();

    const replace =  prompt("Enter what you want to replace: ");
    const replaceWith =  prompt("Enter what you want it to be replaced with: ");
    const askPreview =  prompt("Do you want to preview before renaming? (Y/N): ");
    const preview = (askPreview.toLowerCase() === 'y') ? true : false;

    const folder = "files";

    renameFiles(folder, preview, replace, replaceWith);
