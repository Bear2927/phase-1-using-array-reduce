const batteryBatches = [4, 5, 3, 4, 4, 6, 5];


// Code your solution here
const totalBatteries = batteryBatches.length
const init = 0
let sum = batteryBatches.reduce(function (total, battery) {
    return total + battery;
}, init);


// const sumBatteries = reduce(batteryBatches, function (num) {
//     return (num + num);
// });
