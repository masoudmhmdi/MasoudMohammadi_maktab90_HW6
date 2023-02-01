let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(arr) {
  let tempMap = new Map();
  tempArr=[]
  arr.forEach((v) => {
    let localWord = v.toLocaleLowerCase().split("").sort().join("");
    tempMap.set(localWord,v)
  });
//   console.log(tempMap)
  for(x of tempMap.values()){
    tempArr.push(x)
  }
  return tempArr
}

console.log((aclean(arr)))



