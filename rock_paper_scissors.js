const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
      return userInput
    }
    else{
      console.log("Wrong Input");
    }
  }
  
  function getComputerChoice(){
    randomNumber = Math.floor(Math.random() * 3)
    if (randomNumber === 1){
      choice = 'rock'
      return choice
    }
    else if (randomNumber === 2){
      choice = 'paper'
      return choice
    }
    else{
      choice = 'scissors'
      return choice
    }
  }
  
  function determineWinner(userChoice, computerChoice){
    if (userChoice === computerChoice){
      console.log("It's a Tie!!!")
    }
    else{
    if (userChoice === 'rock'){
      if (computerChoice === 'paper'){
        console.log('Computer Won')
      }
      else{
        console.log('You won')
      }
    }
      if (userChoice === 'paper'){
      if (computerChoice === 'scissors'){
        console.log('Computer Won')
      }
      else{
        console.log('You won')
      }
    }
      if (userChoice === 'scissors'){
      if (computerChoice === 'rock'){
        console.log('Computer Won')
      }
      else{
        console.log('You won')
      }
    }
  }
  }
  
  function playGame(){
    const userChoice = getUserChoice('rock')
    const computerChoice = getComputerChoice()
    console.log(userChoice)
    console.log(computerChoice)
    console.log(determineWinner(userChoice, computerChoice))
  }
  
  playGame()