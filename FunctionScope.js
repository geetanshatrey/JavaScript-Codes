var globalVar=10;

function fun1() {
oopsGlobal=5;
}

function fun2() {
    var output;
    if(typeof globalVar != "undefined"){
      output="Global Variable: "+globalVar;
    }
    console.log(output);
    if(typeof oopsGlobal != "undefined"){
      output="Oops Variable: "+oopsGlobal;
    }
    console.log(output);
}

fun2();
