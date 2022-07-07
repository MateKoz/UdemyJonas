const calcAverageHumanAge = function (ages) {
    const humanAges = ages.map(age =>
        age <= 2 ? 2 * age : 16 + age * 4);
    const filterAge = humanAges.filter(age => age >= 18);
    console.log(filterAge)
    const averageAge = filterAge.reduce((acc, curr) => acc + curr) / filterAge.length

    console.log(averageAge)


}

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3])