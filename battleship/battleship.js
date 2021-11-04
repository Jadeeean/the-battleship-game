var location1 = Math.floor(Math.random() * 5);
var location2 = location1 + 1;
var location3 = location2 + 1;
var guess; //what number does the player guessed
var hits = 0; //how many times has the player guessed right
var guesses = 0; //how many times has the player guessed
var isSunk = false;

while (isSunk == false) {
  guess = prompt("FIRE! (enter a number between 0-6):");
  if (guess < 0 || guess > 6) {
    alert("Please enter a valid cell number!");
  } else {
    guesses++;
    if (guess == location1 || guess == location2 || guess == location3) {
      hits++;
      alert("HIT!");
      if (hits == 3) {
        isSunk = true;
        alert("You sank my battleship!");
      }
    } else {
      alert("MISS!");
    }
  }
}
alert("You totally fired " + guesses + " times to sank the battleship! Which means your shooting accuracy is " + (guesses / 3));
