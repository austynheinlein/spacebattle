
//////////////////////////////////////////////
//OBJECTS: GAME CHARACTERS

//Create Protagonist class
class YourShip{
  constructor(name, hull, firepower, accuracy) {
    //USS Schwarzenegger
    this.name = name
    // same as hitpoints
    this.hull = 20
    // number of hitpoints you subtract from enemy hitpoints, when used
    this.firepower = 5
    // your chance between 0 - 1 that you'll hit enemy
    this.accuracy = 7
  }
  attack(alien){
    //using firepower, deduct 5 hitpoints from enemy.hull
    if (getRandomAccuracy <= this.accuracy) {
      alien.hull-=this.firepower
      console.log("Holy Shit! You just hit an " + alien.name + ".");
    } else {
      console.log("Hey, " + this.name + "! Work on you're aim!" );
    }
  }
}
const hero = new YourShip("USS Schwarzenegger")

//Create Enemy class
class EnemyShip{
  constructor(name, hull, firepower, accuracy) {
    //Alien Ship
    this.name = name
    // same as hitpoints
    this.hull = hull
    // number of hitpoints you subtracted from hero hitpoints, when used
    this.firepower = 4
    // your chance between 0 - 1 that you'll hit enemy
    this.accuracy = 8
  }
  attack(hero){
    if (getRandomAccuracy <= this.accuracy) {
      hero.hull-=this.firepower
      alert("OUCH! You've been hit by an " + alien.name + ".");
    } else {
      alert("Yoooo, that was a close one! An " + this.name + " shot at you.");
    }
  }
}


getRandomHull=Math.floor(Math.random() * (10 - 6)) + 6;
getRandomAccuracy=Math.floor(Math.random() * (10 - 0)) + 0;

const alien = new EnemyShip("Alien Ship", getRandomHull)

// create an object called game
class Game {
  //make a method inside the object to checkWin of hero
  checkHeroWin(hero) {
    if (hero.hull <= 0) {
      console.log("Sorry " + hero.name + ". Your hitpoints are " + hero.hull + " Which means you've been blown into spacedust. Better luck next time!");
    } else {
      console.log("You still have " + hero.hull + " hitpoint(s).");
    }
  }
  //make a method inside the object to checkWin of hero
  checkAlienWin(alien) {
    if (alien.hull <= 0) {
      console.log("Look out, Han Solo, there's a new sharp shooter in town!! Congrats, " + hero.name + "! You defeated an " + alien.name);
    } else {
      console.log("Don't stop now!! This alien scum still has " + alien.hull + " hitpoint(s).");
    }
  }
}
const game = new Game ("")

// hero.attack(alien)
// alien.attack(hero)
// game.checkHeroWin(hero)
// game.checkAlienWin(alien)

//PROMPTS AND ALERTS
alert("SPACE BATTLE!")
//ask user if they want to play. user answers yes or no.
const firstAnswer = prompt("Wanna fight some aliens?", "yes/no")
  //if user answers yes
  if (firstAnswer == "yes") {
    //alert user, and continue
    alert("Niiiice. Hop in this spaceship, here comes the first alien!")
    console.log("user input: yes");
  //if user answers anything else, quit game.
  } else {
    alert("It'd be cooler if did. Bye!")
    console.log(null);
  }

  alert("Ready, Aim, FIIIIRRREEE!")
  hero.attack(alien)
  alert("Oops, now you're being attacked...")
  alien.attack(hero)
  alert("Let's see how you came out of that battle:")
  game.checkHeroWin(hero)
  alert("But what about the bad guys???")
  game.checkAlienWin(alien)

// keep playing until hero or alien has 0 or less hitpoints.
// ISSUE: hitpoint are resetting each round...
