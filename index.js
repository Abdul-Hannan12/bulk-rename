const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));

(async() => {

    try {

      const replace = await prompt("Enter what you want to replace: ");
      const replaceWith = await prompt("Enter what you want it to be replaced with: ");
      const preview = await prompt("Do you want to preview before renaming? (Y/N): ");

      const folder = "data";

      try{
        fs.readdir(folder, (data)=>{
            console.log(data);
        });
      }catch{

      }

      rl.close();

    } catch (e) {

      console.error(e);

    }

  })();
