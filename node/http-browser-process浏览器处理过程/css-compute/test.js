function test() {
    let arr = [1, 2, 3, 4];
    for (let num of arr) {
        console.log(num)
        start(num)
    }
}

function start(c) { 
    if (c < 2) {  
        return start(c) ;
    }  
}

test();