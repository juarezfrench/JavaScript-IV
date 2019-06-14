//1. Copy and paste your code or the solution from yesterday

// 2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

class GameObject {
  constructor(GameObjAttr) {
    this.createdAt = GameObjAttr.createdAt;
    this.dimensions = GameObjAttr.dimensions;
    this.name = GameObjAttr.name;
  }

  destroy() {
    console.log(`${this.name} was removed from the game.`);
  }
}

/*
  === CharacterStats ===
  * healthPoints
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
  */

class CharacterStats extends GameObject {
  constructor(CharStatsAttr) {
    super(CharStatsAttr);
    this.healthPoints = CharStatsAttr.healthPoints;
  }

  takeDamage() {
    console.log(`${this.name} took damage.`);
  }

  destroy() {
    return `${super.destroy()}`;
  }
}

// Sets up inheritance with GameObject
// CharacterStats.prototype = Object.create(GameObject.prototype);

/*  === Hudestroy() { or character resembling that of a human.) ===
 * team            return {`${super.destroy()}`;
 * weapons
 * language
 * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
 * should inherit destroy() from GameObject through CharacterStats
 * should inherit takeDamage() from CharacterStats
 */
class Humanoid extends CharacterStats {
  constructor(HumanoidAttr) {
    super(HumanoidAttr);
    this.team = HumanoidAttr.team;
    this.weapons = HumanoidAttr.weapons;
    this.language = HumanoidAttr.language;
  }

  greet() {
    console.log(`${this.name} offers a greeting in ${this.language}.`);
  }

  takeDamage() {
    return `${super.takeDamage()}`;
  }

  destroy() {
    return `${super.destroy()}`;
  }
}

// Test you work by un-commenting these 3 objects and the list of console logs below:

const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1
  },

  healthPoints: 5,
  name: "Bruce",
  team: "Mage Guild",
  weapons: ["Staff of Shamalama"],
  language: "Common Toungue"
});

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2
  },
  healthPoints: 15,
  name: "Sir Mustachio",
  team: "The Round Table",
  weapons: ["Giant Sword", "Shield"],
  language: "Common Tongue"
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4
  },
  healthPoints: 10,
  name: "Lilith",
  team: "Forest Kingdom",
  weapons: ["Bow", "Dagger"],
  language: "Elvish"
});

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.

// * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.
// * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villain and one a hero and fight it out with methods!

//Prototype Refactor

//
