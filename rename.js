const fs = require('fs');
const prompt = require("prompt-sync")({ sigint: true });

const renameFiles = (folder, preview, replace, replaceWith)=>{

    let renamed = 0;

    try{

        fs.readdir(folder, async (err, data)=>{

            let filteredData = data.filter((value)=>{
                if (value.includes(replace)) return value;
            });

            if (filteredData.length === 0) console.log('No Items Renamed');
    
            for (file of filteredData){
    
                let newName = `${folder}/${file.replaceAll(replace, replaceWith)}`;
                if (!preview){

                    fs.rename(`${folder}/${file}`, newName, ()=>{
                        ++renamed;
                        if (renamed == filteredData.length) console.log(`${renamed} ${(renamed === 1) ? 'item' : 'items'} renamed successfully!`);
                    });
                    
                } else {
    
                    if (`${folder}/${file}` !== newName) console.log(`${folder}/${file} will be renamed to ${newName}`);
    
                    renameAfterConfirmation(folder, file, newName);
    
                }
    
            }
                        
        });
    
        }catch (e) {
            console.log('Failed Reading Files: ' + e);
        }
}


const renameAfterConfirmation = (folder, file, newName)=>{
    const askToRename =  prompt("do you want to rename it? (Y/N): ");
    const rename = (askToRename.toLowerCase() === 'y') ? true : false;
    
    if (rename){
        
        fs.rename(`${folder}/${file}`, newName, ()=>{
            console.log('Rename Successful!');
        });
        
    } else {
        
        console.log('Rename Cancelled!')
        
    }
}


module.exports = {renameFiles};