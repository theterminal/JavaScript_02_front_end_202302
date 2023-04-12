// 20230223 - JavaScript Front-End 202302 - JS Syntax Fundamentals - More Exercise
// More Exercise 07 - Bitcoin Mining - judge: https://judge.softuni.org/Contests/Practice/Index/3787#6


function bitcoinMining(shiftDays) {
    let bitcoinWallet = 0;
    let goldWallet = 0;
    let dayOfTheFirstPurchasedBitcoin = 0;

    for (var i = 1; i < shiftDays.length + 1; i++) {
        if (i % 3 === 0) {
            goldWallet += shiftDays[i - 1] * 0.7;
        } else {
            goldWallet += shiftDays[i - 1];
        }

        if ((goldWallet * 67.51) >= 11949.16) {
            let currentBitcoins = ~~((goldWallet * 67.51) / 11949.16);
            bitcoinWallet += currentBitcoins;
            goldWallet -= ((currentBitcoins * 11949.16) / 67.51);
            
            if (dayOfTheFirstPurchasedBitcoin === 0) {
                dayOfTheFirstPurchasedBitcoin = i;
            }
        }
    }

    console.log(`Bought bitcoins: ${bitcoinWallet}`);

    if (dayOfTheFirstPurchasedBitcoin) {
        console.log(`Day of the first purchased bitcoin: ${dayOfTheFirstPurchasedBitcoin}`);
    }

    console.log(`Left money: ${(goldWallet * 67.51).toFixed(2)} lv.`)
}


bitcoinMining([100, 200, 300]);
bitcoinMining([50, 100]);
bitcoinMining([3124.15, 504.212, 2511.124]);
