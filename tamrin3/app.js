let testArr = [1,1,2,"hello","hello",'mmd',"mmd"];


let uniqArry=(arry)=>{
    let uniqArr = arry.filter((v, i, arr) => {
        return arr.indexOf(v)===i
    });
    return uniqArr
}

console.log(uniqArry(testArr))

