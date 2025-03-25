// function addTwosum(arrayValue,target)
// {
//     let map = new Map();
//     for(let i = 0;i<arrayValue.length;i++)
//     {
//         let complement = target-arrayValue[i];
//         if(map.has(complement))
//         {
//             return [map.get(complement),i]
//         }
//          map.set(arrayValue[i],i)
//     }
// }
// let arrayValue = [0,2,3,4]
// let target = 5
// let val = addTwosum(arrayValue,target)
// console.log(val)
// let map = new Map()
// map.set(2,1)
// map.set(3,1)
// map.set(8,1)
// let key = map.has(3)
// let get = map.get(3)
// console.log(map)
// console.log(key)
// console.log(get)