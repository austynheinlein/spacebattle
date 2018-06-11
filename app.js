
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
      console.log("user hit alien");
      alert("OMG! You just hit an " + alien.name + ".")
    } else {
      console.log("user missed alien");
      alert("Hey, " + this.name + "! Work on you're aim!")
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
      console.log("alien hit user");
      alert("OUCH! You've been hit by an " + alien.name + ".");
    } else {
      console.log("alien missed user");
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
      console.log("user has " + hero.hull + " hitpoints. user lost.");
      alert("Sorry " + hero.name + ". Your hitpoints are " + hero.hull + " Which means you've been blown into spacedust. Better luck next time!")
    } else {
      console.log("user has " + hero.hull + " hitpoints.");
      alert("You made it! You still have " + hero.hull + " hitpoint(s).")
    }
  }
  //make a method inside the object to checkWin of hero
  checkAlienWin(alien) {
    if (alien.hull <= 0) {
      console.log("alien has " + alien.hull + " hitpoints. user won.");
      alert("Look out, Han Solo, there's a new sharp shooter in town!! Congrats, " + hero.name + "! You defeated an " + alien.name)
    } else {
      console.log("alien has " + alien.hull + " hitpoints.");
      alert("Uh Oh!! This alien scum still has " + alien.hull + " hitpoint(s).")
    }
  }
}
const game = new Game ("")


//PROMPTS AND ALERTS
function myGame(){

alert("SPACE BATTLE!")
// ask user if they want to play. user answers yes or no.
const firstAnswer = prompt("Wanna fight some aliens?", "yes/no")
  //if user answers yes
  if (firstAnswer == "yes") {
    //alert user, and continue
    alert("Niiiice. Hop in this spaceship, here comes the first alien!")
    console.log("user input: yes");
  //ISSUE!!!! if user answers anything else, game needs to quit
  } else {
    alert("It'd be cooler if did. Bye!")
    console.log("user quit");
  }

//////////////////////////////////////////////
//start battle
//loop the attacks until alien or hero have <=0 hull
//check win status after each battle
//if either alien or hero reach 0 hull, game over and loop breaks
let battle = () => {
  while (battle) {
    alert("Ready, Aim, FIIIIRRREEE!")
    hero.attack(alien)
    alert("Oops, now you're being attacked...")
    alien.attack(hero)
    alert("Let's see how you came out of that battle:")
    game.checkHeroWin(hero)
    alert("But what about the bad guys???")
    game.checkAlienWin(alien)
  if (hero.hull <= 0 || alien.hull <= 0) {
      battle = false
      console.log("game over");
      alert("Game Over:" + hero.name + " hitpoints = " + hero.hull + ". " + alien.name + " hitpoints = " + alien.hull + ".")
    }
  }
}
battle()
}

    // if (hero.hull || alien.hull <= 0) {
    //   console.log("game over");
    //   alert("Game Over:" + hero.name + " hitpoints = " + hero.hull + ". " + alien.name + " hitpoints = " + alien.hull + ".")
// alert("Ready, Aim, FIIIIRRREEE!")
// hero.attack(alien)
// alert("Oops, now you're being attacked...")
// alien.attack(hero)
// alert("Let's see how you came out of that battle:")
// game.checkHeroWin(hero)
// alert("But what about the bad guys???")
// game.checkAlienWin(alien)
