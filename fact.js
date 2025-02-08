// function fact_num(num){
//     if (num == 1){
//         return 1;
//     }
//     else {
//         return num*fact_num(num - 1);
//     }
// }

// console.log(fact_num(5));

function factorial(num){
    if(num === 0 || num === 1){
        return 1;
    }
    else{
        let fact = 1;
        for(let i = 1; i<=num; i++){
            fact*=i;
        }
        return fact;
    }
}

console.log(factorial(6))