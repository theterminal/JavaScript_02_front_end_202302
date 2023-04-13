// Creating a 'sleep' function using 'await' promise


async function load(seconds) {
    console.log(`${seconds} seconds sleep starts now...`);
    await sleep(seconds);
    console.log(`Awake again after ${seconds} seconds sleep`);
}

async function sleep(seconds) {
    return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
}


load(15);
