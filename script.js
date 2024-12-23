const imageInput = document.getElementById('imageInput');
const topTextInput = document.getElementById('topText');
const bottomTextInput = document.getElementById('bottomText');
const generateButton = document.getElementById('generateButton');
const memeContainer = document.getElementById('memeContainer');
const memeImage = document.getElementById('memeImage');
const topMemeText = document.getElementById('topMemeText');
const bottomMemeText = document.getElementById('bottomMemeText');
let imgSrc;

// Load the uploaded image
imageInput.addEventListener('change', (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      imgSrc = e.target.result;
      memeContainer.style.display = 'inline-block';
    };
    reader.readAsDataURL(file);
  }
});

// Generate the meme
generateButton.addEventListener('click', () => {
  if (imgSrc) {
    /*
    Creating the code below is the challenge for this meme generator

    memeImage.src = imgSrc;
    topMemeText.textContent = topTextInput.value.toUpperCase();
    bottomMemeText.textContent = bottomTextInput.value.toUpperCase();
    */
  } else {
    alert('Please upload an image first!');
  }
});

/************ Additional Challenge **************/

// Add a button that lets the user download the meme
