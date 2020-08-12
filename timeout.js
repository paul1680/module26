function doSomething(){
    console.log(343);
}
console.log(22332);
//setTimeout(doSomething, 10000);

// setTimeout(function(){
//     console.log('lazy and waiting');
// }, 4000);

// setTimeout(() => {
//     console.log('see you');
// }, 3000);

setInterval(function(){
    console.log('doing it');
}, 3000);
console.log(67626);