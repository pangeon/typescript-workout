let strContainer = "";

function inner() {
    strContainer += "A";  
    console.log("        in inner function");
    
}

function middle() {
    strContainer += "B"; 
    console.log("    started middle function");
    inner();
    console.log("    end middle function");
    
}

function outer() {
    strContainer += "C"; 
    
    console.log("started outer function");
    middle();
    console.log("end outer function");
    
}

outer();
console.log(strContainer);

