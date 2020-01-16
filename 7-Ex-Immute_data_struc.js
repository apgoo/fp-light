"use strict";

function lotteryNum() {
	return (Math.round(Math.random() * 100) % 58) + 1;
}

function pickNumber(arr, num) {
    if(!(arr.includes(num))) {
        arr = [...arr, num];
        arr.sort(function asc(x,y) {
            return x - y;
        });
    }
   return arr;
}

var luckyLotteryNumbers = [];


function getLuckyNum(arrForNum, geneNumFn, pickFn) {
    while (arrForNum.length < 6) {
	   arrForNum = pickFn(Object.freeze(arrForNum), geneNumFn());   
    }
    return arrForNum;
}

// getLuckyNum(luckyLotteryNumbers,lotteryNum,pickNumber)


console.log(getLuckyNum(luckyLotteryNumbers,lotteryNum,pickNumber));