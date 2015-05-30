var readline = require('readline');

var rl = readline.createInterface({
 input: process.stdin,
 output: process.stdout
});

rl.question("You're at the start of a maze. You walk down the opening, you can turn right or left. Which do you pick? ", function(answer) {
 if (answer === "left" ) {
  console.log("Congratulations!");
  rl.question("You walk through a doorway and come to three colored doors. Do you choose the red door, green door, or blue door?", function(answer) {
    if (answer === "red") {
      console.log("Oh no! Red means death, fool.");
    }
  })

} else if (answer === "right") {
  console.log("Wrong move, sucka");
  }
  else if (answer === "straight") {
  console.log("That wasn't a choice. Try again!");
  }
  else if (answer === "Left", "Right") {
  console.log("No caps, fool!");
  }

});

/*console.log("You've picked carefully and it's paid off. You've managed to avoid the afterlife. You now walk down the second hall and have three choices. Left, Straight, and Right. Which do you pick?:", answer);*/






/*nested callback*/