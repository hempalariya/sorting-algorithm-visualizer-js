import { bubbleSort } from './algorithms/bubbleSort.js';
import {selectionSort} from './algorithms/selectionSort.js';
import { insertionSort } from './algorithms/insertionSort.js';
import { renderSorting } from './utils/helpers.js';



let array = []
function generateArray(size = 10){
    array = Array.from({length: size}, () => Math.floor(Math.random() * 20) + 1);
    renderSorting(array);
    // bubbleSort(array);
    // selectionSort(array);
    insertionSort(array);
}

generateArray(10);



