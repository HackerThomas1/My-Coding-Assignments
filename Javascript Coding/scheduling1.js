console.log("The enemy attacked! Player has 10 seconds to defeat the enemy!")

function victory() {
    console.log("Player has defeated the enemy!");

}

setTimeout(victory, 5000)

let counter = 10;

function countDown() {
    if (counter > 0) {
        console.log(counter);
        counter--;
    }
}

setInterval(countDown, 2000);