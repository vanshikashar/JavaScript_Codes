let a = [10, 29, 38, 48, 57, 66];

function filterEvenNum(a){
    return a.filter(num => num%2 === 0);
}

console.log(filterEvenNum(a));