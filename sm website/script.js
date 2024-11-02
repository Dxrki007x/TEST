// JavaScript to change colors randomly for each petal
const petals = document.querySelectorAll('.petal');
setInterval(() => {
    petals.forEach(petal => {
        petal.style.backgroundColor = `hsl(${Math.floor(Math.random() * 360)}, 70%, 70%)`;
    });
}, 2000);  // Change color every 2 seconds
