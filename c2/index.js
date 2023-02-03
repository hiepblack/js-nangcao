const game = {
    team1: "Chelsea",
    team2: "BayernMunich",
    player: [
        ["Mendy", "Silva", "Chaloba", "Chillew", "Rame", "kante", "Mount", "Jogdrinho", "Havertz", "Pulisic", "Streling", "Aubameyang"],
        ["Neuer", "De ligt", "Hernandez", "Davies", "Pavard", "Goretzka", "Kimmich", "Musiala", "Mane", "Sane", "Gnabry"],
    ],
    score: "3:0",
    scored: ["Aubameyang", "Mount", "Havertz"],
    date: "23/3/2023",
    odds: {
        team1: 6,
        x: 3.25,
        team2: 1.5,
    },

};

// 1.

for(const[i,player] of game.scored.entries()){
    console.log(`Goal ${i+1}: ${player}`)
}
//2.
let average = 0;
const odds = Object.values(game.odds);
console.log(odds)
for(const odd of odds){
    average += odd
    average /=odds.length
}
console.log(average)
// 3.
const odds2 = Object.entries(game.odds)
console.log(odds2)
for(const[team, odd] of odds2){
    const teamStr = team  === 'x' ?'draw':`vistory ${game[team]}`
    console.log(`odd of ${teamStr} ${odd}` )
}   