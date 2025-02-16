/**
 * Remove Duplicates from Sorted List

Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

Example 1:

Input: head = [1,1,2]
Output: [1,2]
Example 2:

Input: head = [1,1,2,3,3]
Output: [1,2,3]
 

Constraints:

The number of nodes in the list is in the range [0, 300].
-100 <= Node.val <= 100
The list is guaranteed to be sorted in ascending order.
 */ 
/*******Right Answer */
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

var deleteDuplicates = function(head) {
    if (!head) return null; // If the list is empty, return null

    let current = head;

    while (current && current.next) {
        if (current.val === current.next.val) {
            // Skip the duplicate node
            current.next = current.next.next;
        } else {
            // Move to the next node
            current = current.next;
        }
    }

    return head; // Return the modified list
};



function deleteDuplicates(head){
    // let result = [...new Set(head)]
    // console.log(result)
    if(head.length <=0){
     return head
    }
    let array = []
    for(let i =0 ; i<head.length-1;i++){
        if(!array.includes(head[i])){
            array.push(head[i])
        }
    }
    return array


}
 let input = [1,1,2,3,3]
 deleteDuplicates(input)
