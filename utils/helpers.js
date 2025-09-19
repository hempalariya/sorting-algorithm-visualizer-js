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