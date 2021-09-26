

var returnsAnAnonymousFunction = function(){
    return (function(){
    return "somethihg";
});
}

var returnsANamedFunction = function(width,height){
    return width* height;
}
console.log(returnsANamedFunction(3,4));