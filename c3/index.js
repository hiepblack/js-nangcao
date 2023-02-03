const gameEvents = new Map([
    [17,'Goal'],
    [36,'Substitution'],
    [47,'Goal'],
    [61,'yellow card'],
    [69,'red card'],
    [80,'Goal'],
    [90,'Yellow card'],
]);
console.log(gameEvents.values());
// 1.
const events =new Set(gameEvents.values());
console.log(events)
// 2.
gameEvents.delete(69);
// 3.
const time = [...gameEvents.keys()].pop();
console.log(`An event happend or average ,every ${time/gameEvents.size} minius`)
// 4.
for(const[min,event] of gameEvents){
    const half = min <= 45 ?'first':"second";
    console.log(`[${half} HALF] ${min} :${event}`)
}