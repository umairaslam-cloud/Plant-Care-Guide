// JavaScript for the carousel functionality
const items = document.querySelectorAll('.carousel-item');
let currentIndex = 0;

function showNextItem() {
    items[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % items.length;
    items[currentIndex].classList.add('active');
}

setInterval(showNextItem, 3000); // Change item every 3 seconds

// JavaScript for the quiz button
document.getElementById('quizButton').addEventListener('click', function() {
    alert('Quiz feature coming soon!'); // Placeholder for quiz functionality
});