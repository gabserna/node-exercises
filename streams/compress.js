const zip = require('zlib');
const fs = require('fs');
const gzip = zip.createGzip();

//read from a txt file -> compress it --> write it to a file
const inputStream = fs.createReadStream('./textFileName.txt');
const outputStream = fs.createWriteStream('./compressedFile.txt.gz');
inputStream.pipe(gzip).pipe(outputStream);