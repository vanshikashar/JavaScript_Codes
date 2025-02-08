function getRandomNum(min, max){
    return Math.floor(Math.random()*(max-min+1))+min;
}

console.log(getRandomNum(30,90))