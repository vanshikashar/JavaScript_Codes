function findLargestElement(a){
    return a.reduce((max, current)=>
        current > max ? current :max)
}

let a = [32, 12, 23, 45, 56, 78, 89, 55, 46];
let reduce = findLargestElement(a);

console.log(reduce)