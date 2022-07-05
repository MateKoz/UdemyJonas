document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
    const text = document.querySelector('textarea').value;
    const rows = text.split('\n')
    for (const [i, row] of rows.entries()) {
        const [first, second] = row.toLowerCase().trim().split('_');
        const correctSecond = `${first}${second.replace(second[0], second[0].toUpperCase())}`;
        console.log(`${correctSecond.padEnd(20)}${':D'.repeat(i)}`)
    }
})


