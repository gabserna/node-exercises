const fs = require('fs');
//const args = process.argv.slice(2);
const fileToRead = process.argv[2];
const fileToWrite = process.argv[3];

fs.readFile(fileToRead, 'utf8', (err, data) => {
    if (err) throw err;

    const newData = data.replace(/bacon/gi, 'tasty');
    fs.writeFile(fileToWrite, newData, (err) => {
        if (err) throw err;
        console.log(`successfully renamed ${fileToWrite}`);
        
        const baconCounter = (data.match(/bacon/gi) || []).length;
        console.log(`we have word bacon repeated ${baconCounter} times`);
    });
});