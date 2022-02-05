function getSleepHours(day){
    day = day.toLowerCase()
    switch (day){
      case 'monday':
        return 7;
        break;
      case 'tuesday':
        return 7;
        break;
      case 'wednesday':
        return 7;
        break;
      case 'thursday':
        return 8;
        break;
      case 'friday':
        return 8;
        break;
      case 'saturday':
        return 8;
        break;
      case 'sunday':
        return 7;
        break;
      default:
        return 7;
        break;
    }
  }
  
  function getActualSleepHours(){
    totalSleepHours = getSleepHours('monday') + getSleepHours('Tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday')
  
    return totalSleepHours
  }
  
  console.log('Actual Sleep hours: ' + getActualSleepHours())
  
  function getIdealSleepHours(){
    const idealHours = 7
    return idealHours * 7 
  }
  
  console.log("Ideal Sleep hours: " + getIdealSleepHours())
  
  function calculateSleepDebt(){
    actualSleepHours = getActualSleepHours()
    idealSleepHours = getIdealSleepHours() 
    if (actualSleepHours === idealSleepHours){
      console.log('You got the Perfect Sleep')
    }
    else if (actualSleepHours > idealSleepHours){
      console.log('You got too much Sleep, Dummy')
      sleepdebt = actualSleepHours-idealSleepHours
      console.log(`${sleepdebt} hours more than your ideal sleep hours`)
    }
    else{
      sleepdebt = idealSleepHours - actualSleepHours
      console.log('You should get some more sleep')
      console.log(`You need ${sleepdebt} more hours of sleep!`)
    }
  }
  
  calculateSleepDebt()