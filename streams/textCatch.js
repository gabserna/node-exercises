const fs = require("fs");
const file = fs.createWriteStream('./textCatch.txt');
process.stdin.setEncoding('utf8');

process.stdin.on('readable', () => {
    let userInput;
    //use a loop to make sure we read all available data.
    while((userInput = process.stdin.read()) !== null) {
        process.stdout.write(`data: ${userInput}`);
        file.write(`${userInput}`);
        if(userInput.trim() === 'bye') { 
            //it is a good practice to finish the file before 'break' ends the app to avoid creating IO errors
            break;
        }
    }
});

process.stdin.on('end', () => {
    // use 'control + D' to finish or end
    process.stdout.write('Done reading\n');
});
process.stdin.on('close', () => {
    process.stdout.write('close end\n');
});