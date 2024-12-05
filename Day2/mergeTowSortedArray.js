/* You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

 

Example 1:


Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
Example 2:

Input: list1 = [], list2 = []
Output: []
Example 3:

Input: list1 = [], list2 = [0]
Output: [0]

1<3
 */


function mergeTwoLists(list1, list2){
    let result = []
    if(list1.length  <= 0 &&  list2.length <= 0) return [];
    if(list1.length >0 &&list2.length<=0){
       result = list1
       return result
    }
    if(list1.length<=0 && list2.length>0){
        result = list2
       return result
    }
    let lengthOfArray 
    if(list1.length >= list2.length){
        lengthOfArray = list1.length
    }else{
      lengthOfArray = list2.length
    }
    for(let i =0 ; i<lengthOfArray ; i++){
      if(list1[i] >=list2[i]){
         result.push(list2[i])
         result.push(list1[i])
      }else{
        result.push(list1[i])
        result.push(list2[i])
      }
    }
    return result
}
let list1 = [0]
let list2 = [0]
console.log(mergeTwoLists(list1,list2))