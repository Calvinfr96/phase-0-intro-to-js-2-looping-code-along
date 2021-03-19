// Code your solutions in this file
function writeCards(names, event) {
    const messagesArray = []
    for (let i = 0; i < names.length; i++) {
        let greeting = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
        messagesArray[i] = greeting;
    }
    return messagesArray;
}
const names = ["Ada", "Brendan", "Ali"];
const avent = "birthday";

function countDown(integer) {
    let counter = integer
    while (counter >= 0) {
        console.log(counter);
        counter--
    }
}