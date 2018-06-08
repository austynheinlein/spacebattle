//INTRO
// alert("SPACE BATTLE!")
// //ask user if they want to play. user answers yes or no.
// const yourAnswer = prompt("Wanna fight some aliens?", "yes/no")
//   //if user answers yes
//   if (yourAnswer == "yes") {
//     //alert user, and continue
//     alert("Niiiice. Hop in this spaceship, here comes the first alien!")
//     console.log("user input: yes");
//   //if user answers anything else, quit game.
//   } else {
//     alert("It'd be cooler if you said yes... Bye!")
//     console.log(null);
//   }
//////////////////////////////////////////////
//OBJECTS: GAME CHARACTERS

//Create Protagonist class
class OurShip{
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
      console.log("Holy Shit! You actually hit an " + alien.name + ". It now has " + alien.hull + " hitpoints.");
    } else {
      console.log("Hey, " + this.name + "! Work on you're aim!" );
    }
  }
}
const hero = new OurShip("USS Schwarzenegger")

//Create Enemy class
class Enemy{
  constructor(name, hull, firepower, accuracy) {
    //Alien Ship
    this.name = name
    // same as hitpoints
    this.hull = hull
    // number of hitpoints you subtracted from hero hitpoints, when used
    this.firepower = 2
    // your chance between 0 - 1 that you'll hit enemy
    this.accuracy = 8
  }
  attack(hero){
    if (getRandomAccuracy <= this.accuracy) {
      hero.hull-=this.firepower
      console.log("OUCH! You've been hit by an " + alien.name + ". You now have " + hero.hull + " hitpoints.");
    } else {
      console.log("Yoooo, that was a close one! An" + this.name + "shot at you. You still have " + hero.hull + "hitpoints.");
    }
  }
}

//generate random whole number between 3 and 6 for the alien hull
getRandomHull=Math.floor(Math.random() * (7 - 3)) + 3;
getRandomAccuracy=Math.floor(Math.random() * (10 - 0)) + 0;

const alien = new Enemy("Alien Ship", getRandomHull)

// create an object called game
class Game {
  //make a method inside the object to checkWin of hero
  checkHeroWin(hero) {
    if (hero.hull <= 0) {
      console.log("Sorry " + hero.name + ". Your hitpoints are " + hero.hull + " Which means you've been blown into spacedust. Better luck next time!");
    } else {
      console.log("Getting nervous? Don't worry, you still have " + hero.hull + " hitpoints.");
    }
  }
  //make a method inside the object to checkWin of hero
  checkAlienWin(alien) {
    if (alien.hull <= 0) {
      console.log("Look out, Han Solo, we've got a new sharp shooter in space town!! Congrats, " + hero.name + "! You defeated an " + alien.name);
    } else {
      console.log("Don't stop now!! This alien scum still has " + alien.hull + " hitpoints.");
    }
  }
}
const game = new Game ("")

hero.attack(alien)
alien.attack(hero)
console.log(alien);
console.log(hero);
game.checkHeroWin(hero)
game.checkAlienWin(alien)


//PROMPT
// const yourAnswer = prompt("Launch attack on Aliens?", "yes,no")
//   if (yourAnswer == "yes") {
//     hero.attack(alien)
//     // hero.attack(getRandomHull-hero.firepower)
//     alert("Holy Shit! You actually hit the " + alien.name + ". It now has " + alien.hull + " hitpoints.")
//   } else {
//     console.log("bummer.");
//     }
