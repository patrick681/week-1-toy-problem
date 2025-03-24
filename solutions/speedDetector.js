//funciton that checks for overspeeding 
function speedDetector(speed){
    const speedLimit = 70;
    if (speed < speedLimit){
        console.log("ok");
    return;
    }
}
//function that awards demerits according to speed 
let demeritPoints = matchMedia.Floor((speed - speedLimit) / 5);
console.log(`Points: ${demeritPoints}`);
//if statement that informs the driver of an invalid lisence
if (demeritPoint > 12){
    console.log("License suspended");
}
//run the fucntion
speedDetector(80);
