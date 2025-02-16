/**
 * . Add Two Numbers
Medium
Topics
Companies
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example 1:

Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
Example 2:

Input: l1 = [0], l2 = [0]
Output: [0]
Example 3:

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
 */

// function ListNode(node,next = null){
//     this.node = node
//     this.next = next
// }

function twoNumberJoin(li , l2){
    let array = []
    let carry = 0
    for(let i =0 ; i<li.length ; i++){
        array[i] = li[i] + (l2[i]?- l2[i]: 0)
        console.log(array , "before")
        let converToString = array[i].toString()
        console.log(converToString , "cts")
        // console.log(Number(converToString[1]), "numbe")
        if(converToString.length>1){
            array[i] = Number(converToString[1])
            carry = Number(converToString[0])
        }
        if(carry>0){
            array[i]= array[i] + carry
            carry = 0
        }
        console.log(array , "after")
    }
    return array
}

let l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
console.log(twoNumberJoin(l1 , l2))

