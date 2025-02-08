function removeElementFromArray(a, target){
    return a.filter(item => item !== target);

}

let a = [74, 85, 96, 41, 52, 63, 71, 82, 93];
let target = 41;

let removed = removeElementFromArray(a, target);
console.log(removed)