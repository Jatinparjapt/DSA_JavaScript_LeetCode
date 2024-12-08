/**
 * Given two binary strings a and b, return their sum as a binary string.

 

Example 1:

Input: a = "11", b = "1"
Output: "100"
Example 2:

Input: a = "1010", b = "1011"
Output: "10101"
 
 */
// try new approach but not working
class BinaryOpertation {
    constructor(firstNumber , secondNumber){
        firstNumber = this.firstNumber
        secondNumber = this.secondNumber
    }
    binaryAddtion(){
        let protocolForAddtion = {
            "1+1" : 0 ,
            "1+0" : 1,
            "0+1" : 1,
            "0+0" : 0
        }
        const splitStringfirstNumber = this.firstNumber.split('')
        const splitStringSecondNumber = this.secondNumber.split('')
        for(let i = splitStringfirstNumber.length-1; i>=0 ;i--){
            let total = ""
            let carray = 0
            if(splitStringfirstNumber[i] && splitStringSecondNumber[i] === "1"){
                carray+1
                total+= 0
            }else if(splitStringfirstNumber[i] === "0" && splitStringSecondNumber[i] === "1" ){
                carray.toString()
                let newTotal= "1"                    
                
            }
        }

    }
}

// perfect soluation 
function binaryAdd(a, b) {
    let sum = BigInt('0b'+a)+BigInt('0b'+b)
    return sum.toString(2)
};
