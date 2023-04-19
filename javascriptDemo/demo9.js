//functions are objects

function greet(){
    console.log("Hi");
    console.log(language);
}

greet.language = "english";
console.log(greet);
console.log(greet.language);

function log(a){
    console.log(a);
}

var b=3;
log(3);
log(b);
log("hello");
log({greeting:"hi"})
log(function(){
    console.log("hi")
});