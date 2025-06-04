const pages = document.querySelectorAll('.page');

function goToPage(index) {
  // Hide all pages and show the selected page
  document.getElementById('front-page').style.display = 'none';
  
  pages.forEach((page, i) => {
    page.style.display = i === index ? 'block' : 'none';
  });
}

// Function to create rain effect
function createRain() {
  const rainContainer = document.getElementById('rain-container');
  const name = "KUNU";  // You can change the name here

  // Adding 50 raindrops to the container
  for (let i = 0; i < 50; i++) {
    const drop = document.createElement('div');
    drop.classList.add('raindrop');
    
    drop.style.left = `${Math.random() * 100}%`;
    drop.style.animationDuration = `${Math.random() * 2 + 2}s`;
    drop.style.animationDelay = `${Math.random() * 5}s`;

    // Add the name inside the raindrop
    drop.textContent = name;

    rainContainer.appendChild(drop);
  }
}

createRain();
