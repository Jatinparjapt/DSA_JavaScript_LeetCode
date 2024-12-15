/**
 * Sorting Fruits for Royal Chef
Hard
In the magical kingdom of Fruitopia, the grand annual festival has come to an end. The citizens have presented a variety of fruits to their beloved king, and now it’s time for the royal chef to prepare an extravagant feast. However, the chef has a peculiar request. He wants to prioritize fruits based on their frequency of appearance. The chef will use fruits that appeared most frequently first, and if two fruits have the same frequency, he prefers to use the one that appeared first during the festival.

Your task is to help the royal chef organize the fruits in the correct order by creating a program that takes an array of fruits and sorts them in decreasing order of their frequency. If two fruits have the same frequency, the one that appeared first in the original array should come first.

Example 1:
Input:
fruits = ['apple', 'banana', 'banana', 'cherry', 'apple', 'banana', 'cherry', 'cherry', 'cherry'];

Output:
['cherry', 'banana', 'apple']

Explanation:
apple appears 2 times
banana appears 3 times
cherry appears 4 times
Hence, the fruits are sorted by frequency: ['cherry', 'banana', 'apple'].
Example 2:
Input:
fruits = ['mango', 'mango', 'pineapple', 'apple', 'mango', 'pineapple'];

Output:
['mango', 'pineapple', 'apple']

Explanation:
mango appears 3 times
pineapple appears 2 times
apple appears 1 time
The sorted list is ['mango', 'pineapple', 'apple'].
 */
let fruits = ['mango', 'mango', 'pineapple', 'apple', 'mango', 'pineapple']
 fruits = ['apple', 'banana', 'banana', 'cherry', 'apple', 'banana', 'cherry', 'cherry', 'cherry']
function printFruitsByFrequency(fruits) {
    // your code goes here
    const newArrayForFruits = {}
    for (let i = 0; i < fruits.length; i++) {
        if(!newArrayForFruits.hasOwnProperty(fruits[i])){
            newArrayForFruits[fruits[i]] = 1
        }else{
            newArrayForFruits[fruits[i]] = newArrayForFruits[fruits[i]] +1
        }
    } 
    let sortObject= Object.fromEntries(
        Object.entries(newArrayForFruits).sort(([,a],[,b]) => b-a)
    );
   const result = []
   for (let element in sortObject) {
    result.push(element)
   }
    return result
  }

  console.log(printFruitsByFrequency(fruits))

