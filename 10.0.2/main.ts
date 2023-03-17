/* Test */
setTimeout(() => console.log("-> Print after 2 second..."), 2000);
setTimeout(() => console.log("-> Print after 1 second..."), 1000);
setTimeout(() => console.log("-> Trigger 2 immediately"), 0);
console.log("-> Trigger immediately");

/* Bad solution */
let time: number = 0;
while(time <= 60000) { 
    time += 1000;
    setTimeout(() => console.log(`-> Print after ${time} second...`), 1000);
}

/* Good solution */
let stime: number = 0;
function printMessage(stime: number) {
    setTimeout(() => console.log(`-> Print after ${stime} second...`), stime);
};

while(stime <= 60000) {
    printMessage(stime);
    stime += 1000;
}

