let dummy = {
  Justin: 2,
  Cecil: 1,
  Harper: 3
}

console.log("Key:    " + Object.keys(dummy).toString());
console.log("Values: " + Object.values(dummy));

const transformation = Object.keys(dummy)
  .map(person => {
    return [...Array(dummy[person])].map((_,i)=>{
      return person;
    });
  })
  .reduce((arr, el)=>{
    return arr.concat(el);
  }, []);

console.log(transformation);

let thing = Object.keys(dummy);
console.log("thing:");
console.log(thing);
let thing2 = thing.map(item=>{return [...Array(dummy[item])].map((_,i)=>{
  return item;
});});
console.log("thing2:");
console.log(thing2);
let thing3 = thing2.reduce((arr,el)=>{
  return arr.concat(el);
}, []);
console.log("thing3:");
console.log(thing3);