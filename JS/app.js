function addSquares(a,b){
    function sq(x){
        return x*x;
    }

    return sq(a) + sq(b);
}

console.log(addSquares(19,40))