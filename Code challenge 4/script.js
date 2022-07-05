const gameEvents = new Map([
    [17, 'GOAL'],
    [36, 'Substitution'],
    [47, 'GOAL'],
    [61, 'Substitution'],
    [64, 'Yellow Card'],
    [69, 'Red Card'],
    [70, 'Substitution'],
    [72, 'Substitution'],
    [76, 'GOAL'],
    [80, 'GOAL'],
    [92, 'Yellow Card'],
]);


//1. create an array events of the different game events that happened (no duplicates);
console.log(gameEvents.values());
const events = [...new Set(gameEvents.values())];
console.log(events);

//2. After the game has finished, it was found that the yellow card from minutes 64 was unfair. So remove this event from the game eents log.
gameEvents.delete(64);
console.log(gameEvents)

//3. Print the fallowing string to the console "An event happened, on average, every 9 minutes"
//(keep in mind that a game has 90 minutes);
const time = [...gameEvents.keys()].pop();
const lengthArray = gameEvents.size;
console.log(`An event happened, on average, every ${time / lengthArray} minutes`);

//4. Loop over the events and log them to console makgint it in the first half or second half.
//Like this :
//[FIRST HALF] 17: GOALD

for (const [key, value] of gameEvents) {
    console.log(key <= 45 ? `[FIRST HALP] ${key}: ${value}` : `[SECOND HALP] ${key}: ${value}`)

}