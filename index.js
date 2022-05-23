// code your solution here



function superbowlWin(record){
    const obj = record.find(obj => obj.result === "W")
    return !!obj ? obj.year : undefined

}