const fs = require('fs');
const prompt = require("prompt-sync")({ sigint: true });

const renameFiles = (folder, replace, replaceWith, confirm)=>{

    let renamed = 0;

    if (confirm){

        fs.readdir(folder, async (err, data)=>{

            let filteredData = data.filter((value)=>{
                if (value.includes(replace)) return value;
            });
    
            if (filteredData.length === 0) console.log('No Items Renamed');
    
            for (file of filteredData){
    
                let newName = `${folder}/${file.replaceAll(replace, replaceWith)}`;
    
                    fs.rename(`${folder}/${file}`, newName, ()=>{
                        ++renamed;
                        if (renamed == filteredData.length) console.log(`${renamed} ${(renamed === 1) ? 'item' : 'items'} renamed successfully!`);
                    });
    
            }
    
        });

    } else {
        console.log('Rename Cancelled!');
    }
    
}

module.exports = {renameFiles};
