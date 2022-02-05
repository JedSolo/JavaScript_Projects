let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = true;
const age = 18;

if (age>18 && !registeredEarly){
  raceNumber += 1000;
}

if (age>18 && !registeredEarly){
  console.log(`Race Number:${raceNumber}, Racetime: 9:30am`);
}
else if(age>18 && registeredEarly){
  console.log(`Race Number:${raceNumber}, Racetime: 11:00am`)
}
else{
  console.log('See registration desk')
}

if (age < 18){
  console.log(`Race Number:${raceNumber}, Racetime: 12:30pm`)
}
