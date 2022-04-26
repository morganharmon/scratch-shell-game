// import functions and grab DOM elements
const shell1 = document.getElementById('shell1');
const shell2 = document.getElementById('shell2');
const shell3 = document.getElementById('shell3');

const pearl1 = document.getElementById('pearl1');
const pearl2 = document.getElementById('pearl2');
const pearl3 = document.getElementById('pearl3');

const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');

// let state
let pearls = 0;
let empties = 0;
let total = 0;

// set event listeners 
button1.addEventListener('click', () => {
    const winner = Math.ceil(Math.random() * 3);
    if (winner === 1) {
        alert('You found a pearl!');
        pearls++;
        document.getElementById('pearlsSpan').textContent = pearls;
        shell1.classList.add('hidden');
        pearl1.classList.remove('hidden');
        let total = pearls + empties;
        document.getElementById('totalSpan').textContent = total;

    } else {
        alert('Better luck next time.');
        empties++;
        document.getElementById('emptiesSpan').textContent = empties;
        let total = pearls + empties;
        document.getElementById('totalSpan').textContent = total;
    }
});

button2.addEventListener('click', () => {
    const winner = Math.ceil(Math.random() * 3);
    if (winner === 2) {
        alert('You found a pearl!');
        pearls++;
        shell2.classList.add('hidden');
        pearl2.classList.remove('hidden');
        document.getElementById('pearlsSpan').textContent = empties;
        let total = pearls + empties;
        document.getElementById('totalSpan').textContent = total;

    } else {
        alert('Better luck next time.');
        empties++;
        document.getElementById('emptiesSpan').textContent = empties;
        let total = pearls + empties;
        document.getElementById('totalSpan').textContent = total;
    }
});
button3.addEventListener('click', () => {
    const winner = Math.ceil(Math.random() * 3);
    if (winner === 3) {
        alert('You found a pearl!');
        pearls++;
        shell3.classList.add('hidden');
        pearl3.classList.remove('hidden');
        document.getElementById('pearlsSpan').textContent = empties;
        let total = pearls + empties;
        document.getElementById('totalSpan').textContent = total;

    } else {
        alert('Better luck next time.');
        empties++;
        document.getElementById('emptiesSpan').textContent = empties;
        let total = pearls + empties;
        document.getElementById('totalSpan').textContent = total;
    }
});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
