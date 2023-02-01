
const finalSort=(...other)=>{
    let tempArr=[]
    other.forEach((v)=>{
        v.forEach((v)=>{
            tempArr.push(v)
        })
    })
    tempArr.sort((a,b)=>b-a)
    console.log(tempArr)
}


finalSort([5,6,2],[3,7,1],[2,4,8],[12,50,80])