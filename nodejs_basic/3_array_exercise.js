function average(scoresArray){
    let scoresSum = scoresArray.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
    })
    let average = Math.round(scoresSum/scoresArray.length);
    return average
}

console.log(average([1,1,1,1,1,1,2,2]))
console.log(average([5,5,10]))