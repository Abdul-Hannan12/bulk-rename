const prompt = require("prompt-sync")({ sigint: true });
const {renameFiles} = require('./rename');

// const readline = require('readline');
// const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
// const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
// rl.close();

const folder = prompt("Enter path of the folder: ");

const replace =  prompt("Enter what you want to replace: ");
const replaceWith =  prompt("Enter what you want it to be replaced with: ");

const askConfirm =  prompt("Are you sure You Want to rename? (Y/N): ");
const confirm = (askConfirm.toLowerCase() === 'y') ? true : false;

renameFiles(folder, replace, replaceWith, confirm);