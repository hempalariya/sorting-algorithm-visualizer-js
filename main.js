
let array = []
function generateArray(size = 10){
    array = Array.from({length: size}, () => Math.floor(Math.random() * 20) + 1);
    renderSorting(array);
    // bubbleSort(array);
    // selectionSort(array);
    // insertionSort(array);
    // mergeSort(array)
    // quickSort(array)
}

generateArray(10);
    








export function swap(arr, i, j) {
    if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

export function renderSorting(arr) {
    const grid = document.querySelector('.grid');
    grid.innerHTML = ''; 
    arr.forEach(el => {
        const div = document.createElement('div');
        div.classList.add('box');
        div.style.height = `${el * 10}px`; 
        grid.appendChild(div);
    });
}


export function delay(ms = 300){
    return new Promise(resolve => setTimeout(resolve, ms)); 
}

async function bubbleSort(arr) {
    renderSorting(arr);
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
                swap(arr, j, j + 1);
                renderSorting(arr); 
                await delay();
            }
        }
    }


    async function selectionSort(arr) {
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






async function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const mid = Math.floor(arr.length / 2);

   
    const left = await mergeSort(arr.slice(0, mid));
    const right = await mergeSort(arr.slice(mid));

    
    return await merge(left, right);
}

async function merge(left, right) {
    let result = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }

        
        renderSorting([...result, ...left.slice(i), ...right.slice(j)]);
        await delay(200);
    }


    result = [...result, ...left.slice(i), ...right.slice(j)];

    renderSorting(result);
    await delay(200);

    return result;
}


function quickSort(arr){

    if(arr.length <= 1) {
        return arr
    }

    let pivot = arr[arr.length - 1]
    let left = []
    let right = []

    for(let i = 0; i < arr.length - 1; i++){
        if(arr[i] < pivot) {
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    
    return [...quickSort(left), pivot, ...quickSort(right)]
}



