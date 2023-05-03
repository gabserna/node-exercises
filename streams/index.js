const fs = require("fs");
//console.log(fs);
const file = fs.createWriteStream('./reallyBigFile.txt');
for (let i=0; i<1e5; i++) {  //or 1e5
    file.write('Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, ut nulla cum iure dolorem corrupti veniam voluptatum reiciendis laborum est autem, amet, esse neque? At eius deleniti similique illum dolores.');
}
file.end();

// this code will create a big file of text as long as stated in the for loop