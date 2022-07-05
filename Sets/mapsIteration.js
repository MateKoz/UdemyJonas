const question = new Map([
    ['question', 'What is the best programimg language in the world?'],
    [1, 'C'],
    [2, 'Java'],
    [3, 'JavaScript'],
    ['correct', 3],
    [true, 'Correct !!!!'],
    [false, 'Try again']
]);
console.log(question)

//konwercja obiektu na mapy;
//konwercja obiektu na mapy;

// const hoursMap = new Map(Object.entries(openingHour))

console.log(question.get('question'))
for (const [key, value] of question) {
    if (typeof key === "number") {
        console.log(`Answer ${key}: ${value}`)
    }
}
const answer = 3
// const answer = Number(prompt('What is your answer'));
console.log(answer)


console.log(question.get(question.get('correct') === answer));

// conver map to array;


console.log(`=======================`)
console.log([...question])
console.log(question.entries())
console.log([...question.keys()])
console.log([...question.values()]);


