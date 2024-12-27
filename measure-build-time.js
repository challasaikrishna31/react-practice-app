const { exec } = require('child_process');

const start = Date.now();

exec('npm run build', (error, stdout, stderr) => {
    const end = Date.now();
    const buildTime = (end - start) / 1000; // convert to seconds
    console.log(`Build completed in ${buildTime.toFixed(2)} seconds`);

    if (error) {
        console.error(`Error: ${error.message}`);
        return;
    }

    if (stderr) {
        console.error(`stderr: ${stderr}`);
        return;
    }

    console.log(stdout);
});
