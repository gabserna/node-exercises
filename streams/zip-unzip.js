const zip = require('zlib');
const fs = require('fs');
const gzip = zip.createGzip();
const gunzip = zip.createGunzip();

const file = fs.createWriteStream('./reallyBigFile.txt');
for (let i=0; i<1e5; i++) {  //or 1e5
    file.write('Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, ut nulla cum iure dolorem corrupti veniam voluptatum reiciendis laborum est autem, amet, esse neque? At eius deleniti similique illum dolores.');
}
file.end();


const inputStream = fs.createReadStream('./textFileName.txt');
const outputStream = fs.createWriteStream('./compressedFile.txt.gz');
inputStream.pipe(gzip).pipe(outputStream);

const inputStream2 = fs.createReadStream('./compressedFile.txt.gz');
const outputStream2 = fs.createWriteStream('./out.txt');
inputStream2.pipe(gunzip).pipe(outputStream2);