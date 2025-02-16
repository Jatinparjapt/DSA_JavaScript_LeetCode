const numberBinary = "10101"
console.log(parseInt(numberBinary, 2))
numberBinary.toString(2)
console.log(numberBinary)
class Binary {
    constructor(str){
        this.str = str
    }
    binaryToNumber(str){
        let result = 0
        for(let i = str.length-1 ; i>=0 ;i--){
            // console.log(result , "first")
            let sum = Number(str[i]) * Math.pow(2 , str.length - i -1 )
            console.log(sum , "sum")
             result += sum
            //  console.log(result, sum ,"second")
        }
        return result
    }
    NumberToBinary(num){
        let tempNum = num
        let result = ""
        while(tempNum<=0){
           if() tempNum %2 
        }
        
    
    return result
    }
}

 const binaryClass = new Binary()
 console.log(binaryClass.binaryToNumber("101010"))
function binaryToNumber(str){
    let result = 0
    for(let i = str.length-1 ; i>=0 ;i--){
        // console.log(result , "first")
        let sum = Number(str[i]) * Math.pow(2 , str.length - i -1 )
        console.log(sum , "sum")
         result += sum
        //  console.log(result, sum ,"second")
    }
    return result
}
// console.log(binaryToNumber(numberBinary))