function createcounter(){
    let count = 0;

function increment(){
    count ++;
    console.log("Count :", count);
}

return{
    incrementCounter:function(){
        increment();
    },
    getCount:function(){
        return count;
    }
}
}

const counter = createcounter();
counter.incrementCounter();
counter.incrementCounter();

console.log(counter.getCount())