document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
    const text = document.querySelector('textarea').value;
    const rows = text.split('\n')
    for (const [i, row] of rows.entries()) {
        const [first, second] = row.toLowerCase().trim().split('_');
        const correctSecond = `${first}${second.replace(second[0], second[0].toUpperCase())}`;
        console.log(`${correctSecond.padEnd(20)}${':D'.repeat(i + 1)}`)
    }
})


const getCode = str => str.slice(0, 3).toUpperCase()

const flights =
    '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

for (const flight of flights.split('+')) {
    const [type, from, to, time] = flight.split(';');
    const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll('_', ' ')} from ${getCode(from)} to ${getCode(to)} (${time.replace(':', 'h')})`.padStart(50)
    console.log(output)
}
