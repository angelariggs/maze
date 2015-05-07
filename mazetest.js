var readline = require('readline');

var rl = readline.createInterface({
 input: process.stdin,
 output: process.stdout
});

if ("left" ) {
 console.log("congradulations");
} else {
 
}

rl.question("You're at the start of a maze. You walk down the opening, you can turn right or left. Which do you pick? ", function(answer) {
 // TODO: Log the answer in a database
 console.log("You,ve picked carefully and it's paid off. You've managed to avoid the afterlife. You now walk down the second hall and have three choices. Left, Straight, and Right. Which do you pick?:", answer);

 rl.close();
});