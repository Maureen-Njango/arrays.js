let arr1 = [3,7,34,90,12]
let findElement = arr1[arr1.length-1]
console.log(findElement)
//
let arr2 =[true, "green","where", "Snake", 12,56]
let getElement = arr2[arr2.length-1]
console.log(getElement)
//
let arr3 = [-5,9,5,3,2,-3,6,8,4,1]
let sortArray = [arr3.sort()]
console.log(sortArray)
//

let stringmyPets = ["cow", "Birds", "snake", "Dog"]
let pets = stringmyPets.join()
console.log(pets)
//
var arr = ["apples","mango","apple", "mango", "mango"]
function removeDuplicate(data){
    return data.filter((value,index) =>data.indexOf(value)===index);
}
    console.log(removeDuplicate(arr))
//
let arr5=["the", "way", "x", "4"]
console.log(arr5.includes("way"));




//sorting
let word = (string) =>{
    return string.split("").sort().join("");


}
console.log(word("sevink"))










