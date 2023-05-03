let num = 1;

for (let i = Number(process.argv[2]); i <= 20; num++, i += 2) {
    console.log(num + ": counting: " + i);
}