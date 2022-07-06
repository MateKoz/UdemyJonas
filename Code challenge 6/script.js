const pollBtn = document.querySelector('.poll')

const poll = {
    question: 'What is your favourite programming language?',
    options: ['0: JavaScript', '1: Pythhon', '2: Rust', '3: C++'],
    answers: new Array(4).fill(0),

    registerNewAnswer() {
        const answer = Number(
            prompt(`${this.question}\n${this.options.join('\n')}
        \n (Write option number)`
            )
        );
        //register answer
        typeof answer === 'number'
        && answer < this.answers.length
        && this.answers[answer]++;

        this.displayResults();
        this.displayResults('string');
    },
    displayResults(type = 'array') {
        if (type === 'array') {
            console.log(this.answers)
        } else if (type === 'string') {
            console.log(`Poll results are ${this.answers.join(', ')}`)
        }
    }
};

pollBtn.addEventListener('click', poll.registerNewAnswer.bind(poll))
console.log(poll.answers)

poll.displayResults.call({answers: [5,2,3]})

