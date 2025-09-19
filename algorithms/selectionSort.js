import { swap, renderSorting, delay } from '../utils/helpers.js';


export async function selectionSort(arr) {
    renderSorting(arr);
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;  
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }  
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]; 
            renderSorting(arr); 
            await delay();
        }       
}}