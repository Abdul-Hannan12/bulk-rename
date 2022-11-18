const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));

(async() => {

    try {

      const replace = await prompt("Enter what you want to replace: ");
      const replaceWith = await prompt("Enter what you want it to be replaced with: ");
      const askPreview = await prompt("Do you want to preview before renaming? (Y/N): ");
      const preview = (askPreview.toLowerCase() === 'y') ? true : false;

      const folder = "files";

      try{

        fs.readdir(folder, async (err, data)=>{

            for (file of data){

                let newName = `${folder}/${file.replaceAll(replace, replaceWith)}`;
                if (!preview){

                    fs.rename(`${folder}/${file}`, newName, ()=>{
                        console.log('Rename Successful!');
                    });

                } else {

                    if (`${folder}/${fileName}` !== newFileName) console.log(`${folder}/${fileName} will be renamed to ${newFileName}`);

                    const askToRename = await prompt("do you want to rename it? (Y/N): ");
                    console.log(askToRename);
                    const rename = (askToRename.toLowerCase() === 'y') ? true : false;

                    if (rename){

                        fs.rename(`${folder}/${file}`, newName, ()=>{
                            console.log('Rename Successful!');
                        });

                    } else {

                        console.log('Rename Cancelled!')

                    }

                }

            }

        });

      }catch (e) {
            console.log('Failed Reading Files: ' + e);
      }

      rl.close();

    } catch (e) {
      console.error('Failed to prompt: ' + e);
    }

  })();
