const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};
//1 Create one player array for each team (variables players1 and players2);
//1 Create one player array for each team (variables players1 and players2);

const [players1, players2] = game.players;

// console.log(players1);
// console.log(players2);

//2. Create one variable gk, with goalkeepers name, and one array fieldplayers with all remaining 10 fields player
//2. Create one variable gk, with goalkeepers name, and one array fieldplayers with all remaining 10 fields player
const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers)

//3. Create an array allplayers containing all players of both teams (22 players);
//3. Create an array allplayers containing all players of both teams (22 players);

const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

//4. During the game, Create a new array playersFinal containing all the original team1 players  + 3 new player
//4. During the game, Create a new array playersFinal containing all the original team1 players  + 3 new player

const playersFinal = [...players1, 'Thiago', 'Coutino', 'Persic'];
// console.log(playersFinal);

//5.Based on the game.odds object, create one variable for each odd called team1, draw and team2
//5.Based on the game.odds object, create one variable for each odd called team1, draw and team2

const {odds: {team1, x: draw, team2}} = game
// console.log(team1, draw, team2);

//6
//6

const printGoals = function (...players) {
    // console.log(players)
    // console.log(`${players.length} goals were scored`);

}
printGoals(...game.scored);


//7.
//7.

// team1 < team2 && console.log(`Team 1 is more likely to win`)
// team1 > team2 && console.log(`Team 2 is more likely to win`)


//second code;

//1.
console.log(game.scored.entries())

for (const [i, player] of game.scored.entries()) {
    console.log(`Goal ${i + 1} shots ${player}`)
}

//2
//2

const odds = Object.values(game.odds)
let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;
console.log(average)

//3.
console.log('============3============')
for (const [team, odd] of Object.entries(game.odds)) {
    // console.log(team, odd);
    const teamStr = team === 'x' ? 'Draw' : `victory ${game[team]}`;
    console.log(`Odds of ${teamStr} ${odd}`)
}

console.log()




