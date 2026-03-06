
function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        if (timeoutId) clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}


const input = document.getElementById('userInput');
const debounceCountEl = document.getElementById('debounceCount');
const statusEl = document.getElementById('status');

let debounceCounter = 0;


const performSearch = (value) => {
    debounceCounter++;
    debounceCountEl.innerText = debounceCounter;
    statusEl.innerText = `Final search sent for: "${value}"`;
    statusEl.style.color = "green";
};

const debouncedUpdate = debounce(performSearch, 1000);

input.addEventListener('input', (e) => {
    const val = e.target.value;
    
    statusEl.innerText = "Typing..."; 
    statusEl.style.color = "orange";
    
    debouncedUpdate(val);
});