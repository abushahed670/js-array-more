/**
 * looping technique
 * 1. for loop
 * 2. while loop 
 * 3. do while
 * 4. for in -- object loop korar jonno
 * 5. for of -- array loop korar jonno 
 * 
 */
const friends =['elon', 'bill', 'mark', 'waren'];
for (const friend of friends){
    //console.log(friend);
}
for(let i=0; i<friends.length; i++){
    // console.log(i);
    // console.log(friends[i]);
}


// we can do it by using while loop
const numbers=[23, 34, 45, 43,78] 
let i=0;
while(i < friends.length){
    // console.log(friends[i]);
    i++;
}
let n=0;
while(n<numbers.length){
    console.log(numbers[n]);
    n++;
}