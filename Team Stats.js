team = {
    _players: [{firstName:'Lionel', lastName:'Messi', age:35}, {firstName:'Christiano', lastName:'Ronaldo', age:31}, {firstName:'Mohammed', lastName:'Salah', age:30}],
    _games: [{opponent: 'Chealse', teamPoints: 4, opponentPoints: 1}, {opponent: 'Man City', teamPoints: 3, opponentPoints: 2}, {opponent: 'Real Madrid', teamPoints: 2, opponentPoints: 1}],
    get players(){
      return this._players   
    },
    get games(){
      return this._games
    },
    addPlayer(firstName, lastName, age){
      let player = {
        firstName: firstName,
        lastName: lastName,
        age: age
      }
      this.players.push(player)
    },
    addGame(opponent, teampoint, opponentpoint){
      let game = {
        opponent: opponent,
        teamPoints: teampoint,
        opponentPoints: opponentpoint
      }
      this.games.push(game)
    }
  }
  
  // Adding new players
  team.addPlayer('Steph', 'Curry', 28)
  team.addPlayer('Lisa', 'Leslie', 24)
  team.addPlayer('Bugs', 'Bunny', 36)
  
  console.log(team.players)
  
  console.log('')
  // Adding new games:
  team.addGame('Bayern', 3, 3)
  console.log(team.games)