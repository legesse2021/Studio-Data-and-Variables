// FORK this starter file and save it to your own Repl.it account.


// Declare and initialize the 12 variables here:

let date = 'monday 2019-03-18';
let time = "10:05:34 AM" ;
let astronautsCount = 7;
let astronautsStatus = 'ready';
let averageAstronautsMassKg = 80.7;
let crewMassKg = astronautsCount*averageAstronautsMassKg;
let fuelMassKg = 760000;
let suttleMassKg = 74842.31;
let totalMassKg = crewMassKg*fuelMassKg*suttleMassKg;
let fuelTempCelisius = -225;
let fuelLevel = 100;
let weatherStatus = 'clear';
let line=("------------------------------------------------------");
let title="> LC04 - LAUNCH CHECKLIST";
let space="                                                        ";
// Write code to generate the LC04 report here:
console.log(line);
console.log(title);
console.log(line);
console.log(date);
console.log(time);
console.log(space);
console.log(line);
console.log('> ASTRONAUT INFO');
console.log(line);
console.log("* Count :",astronautsCount);
console.log("* Status :",astronautsStatus);
console.log(space);
console.log(line);
console.log("> Fuel Data");
console.log(space);
console.log(line);
console.log("* Fuel temp celsius: ",fuelTempCelisius,"c");
console.log("* Fuel Level: ",fuelLevel,"%");
console.log(space);
console.log(line);
console.log("> MASS DATA");
console.log(line);
console.log("* Crew mass: ",crewMassKg,"kg");
console.log("* Fuel mass: ",fuelMassKg,"kg");
console.log("* Shuttle mass: ",suttleMassKg,"Kg");
console.log("* Total mass: ",totalMassKg,"kg");
console.log(space);
console.log(line);
console.log("> FLIGHT PLAN: ");
console.log(line);
console.log("* Weather: ",weatherStatus);
console.log(space);
console.log(line);
console.log("> OVERALL STATUS");
console.log(line);
console.log("* Clear for takeoff: YES")


// When done, have your TA check your code.




// BONUS: Use readline-sync to prompt the user to enter the number of astronauts going on the mission.

