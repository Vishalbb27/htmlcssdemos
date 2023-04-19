console.log(window)
console.log(this)

function x(){
    console.log(this);
    this.newvariable="hello"
}

x();
console.log(newvariable)

var b= function(){
    console.log(this);
};
b();

var c = {
    name:"this new object",
    log:function(){
        console.log(this);
    }
}
c.log();