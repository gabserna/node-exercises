const zip = require('zlib');
const fs = require('fs');
const gunzip = zip.createGunzip();

const inputStream2 = fs.createReadStream('./compressedFile.txt.gz');
const outputStream2 = fs.createWriteStream('./out.txt');
inputStream2.pipe(gunzip).pipe(outputStream2);  //read a compressed file -> (g)unzip it --> write it to a different file