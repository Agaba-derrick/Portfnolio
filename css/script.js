// JavaScript for dynamic content

// Change the name dynamically
const nameElement = document.getElementById('name');
const names = ['Agaba', 'Derrick', 'Junior'];
let index = 0;

function changeName() {
    nameElement.textContent = `I'm ${names[index]}`;
    index = (index + 1) % names.length;
}

// Call the changeName function every 3 seconds
setInterval(changeName, 3000);

// Load images and links dynamically
const images = document.querySelectorAll('img');
const links = document.querySelectorAll('a');

// Define image and link sources
const imageSources = ['image/cloud.png', 'image/mountain.png', 'image/cloud.png'];
const linkHrefs = ['mailto:agabaderrick18@gmail.com', 'second-link-here', 'third-link-here'];

// Update image and link sources
for (let i = 0; i < images.length; i++) {
    images[i].src = imageSources[i];
}

for (let i = 0; i < links.length; i++) {
    links[i].href = linkHrefs[i];
}

// JavaScript for other dynamic functionalities can be added here.