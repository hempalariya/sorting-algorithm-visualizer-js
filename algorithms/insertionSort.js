import { renderSorting, delay, swap } from '../utils/helpers.js';


export async function insertionSort(arr) {
    console.log(arr)
    renderSorting(arr);
       for (let i = 1; i < arr.length; i++) {
        let curIndex = i;
        let j = i - 1;
        while (j >= 0 && arr[j] > arr[curIndex]) {
            swap(arr, j, curIndex);
            curIndex = j;
            j--;
            await delay();
            renderSorting(arr); 
        }
    }  
    // for (let i = 1; i < arr.length; i++) {
    //     let key = arr[i];
    //     let j = i - 1;
    //     while (j >= 0 && arr[j] > key) {
    //         arr[j + 1] = arr[j];
    //         j--;
    //     }
    //     await delay();
    //     arr[j + 1] = key;
    //     console.log(arr);
    //     renderSorting(arr); 
    // }  

//     for(let  i = 1; i < arr.length; i++){
//         let curIndex = i;
//         while(curIndex > 0 && arr[curIndex] < arr[curIndex - 1]){
//             for(let j = i-1; j >=0; j--){
//                 if(arr[curIndex] < arr[j]){
//                     // [arr[curIndex], arr[j]] = [arr[j], arr[curIndex]];
//                     swap(arr, j, curIndex);
//                     curIndex = j;
//                     renderSorting(arr);
//                     await delay();
//                 }

//             }

//     }

// }



}