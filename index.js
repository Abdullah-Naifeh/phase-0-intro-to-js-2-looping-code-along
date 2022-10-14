// Code your solutions in this file
// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts){
// for (let i = 0; i < gifts.length ; i++){
//     console.log(`Wrapped ${gifts[i]} and added a bow!`)
// };
// return gifts;
// }
// wrapGifts(gifts)



 function writeCards(arr, eventname) {
     let newArr = [];
     for (let i = 0; i < arr.length ; i++){
         newArr.push("Thank you, "+arr[i]+", for the wonderful " + eventname + " gift!")
     } return newArr ;  
 }

 console.log(writeCards(["Charlie", "Samip", "Ali"], "surprise"));


function countDown (number){
    let num = 0;
    while( number >= num){
    console.log(num++)
    }
    return number;
}
countDown(10)
