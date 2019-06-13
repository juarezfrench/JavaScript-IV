// CODE here for your Lambda Classes
class Person {
    constructor( name, age, location) {
      this.name = name;
      this.age = age;
        this.location = location;
    }
      

    speak() {
        console.log(`Hello my name is ${name}, I am from ${location}`)
    }
}


class Instructor extends Person {
    constructor( name, age, location, specialty, favLanguage, catchPhrase ) {
        super(name, age, location);
        this.specialty = specialty;
        this.favLanguage = favLanguage;
        this.catchPhrase = catchPhrase;
    }

    speak() {
      return  `${super.speak()}`;
    }

    demo() {
     console.log(`Today we are learning about ${subject}`)
    }
    grade() {
        console.log('{student.name} receives a perfect score on {subject}')
    }

}

class Students extends Person {
    constructor( name, age, location, previousBackground, className, favSubjects) {
        super(name, age, location);
        this.previousBackground = previousBackground;
        this.className = className;
        this.favSubject = favSubject;
        this.subject = this.subject
    }

    listsSubjects() {
        consoleLog(this.favSubject);
         }

    PRAssignment() {
        console.log(`${super.name} has submitted a PR for ${this.subject}`)
        
    }

    sprintChallenge() {

    console.log(`${super.name} has begun sprint challenge on ${this.subject}`)

    }
}

    class ProjectManagers extends Instructor {
        constructor(name, age, location, specialty, favLanguage, catchPhrase, gradClassName, favInstructor) {
        super(name, age, location, specialty, favLanguage, catchPhrase);
        this.gradClassName = gradClassName;
        this.favInstructor = favInstructor;
        this.channel = this.channel
        }


        standUp() {
        console.log(`${super.name} announces to ${this.channel} channel standy times!`​​​​)
        }

   debugsCode() {
       console.log(`{super.name} debugs ${student.name}'s code on ${this.subject}`);
        
        }

    }



const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
})