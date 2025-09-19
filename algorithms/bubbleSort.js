import { swap, renderSorting, delay } from '../utils/helpers.js';


export async function bubbleSort(arr) {
    renderSorting(arr);
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
                swap(arr, j, j + 1);
                renderSorting(arr); 
                await delay();
            }
        }
    }