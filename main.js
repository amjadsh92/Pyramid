let n = 10
let k = 1;

for (let i = 0; i < n; i++) {
    for (let j = 1; j <= i + 1; j++) {
        process.stdout.write(k + " ");
        k += 2;
    }
    k = 1;
    console.log();
}