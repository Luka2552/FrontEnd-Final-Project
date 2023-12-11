// Section 1

document.addEventListener('DOMContentLoaded', function () {
  const counter = document.getElementById('counter');
  const headerImage = document.getElementById('headerImage');
  const satisfaction = document.getElementById('clientSatisfaction');
  const images = [
    {
      src: 'Images/1.avif',
      alt: "Me at my Friends's Wedding",
      style: 'style-for-image-1',
      satisfaction: 'Satisfied Clients',
    },
    {
      src: 'Images/2.avif',
      alt: 'Me in Armenia',
      style: 'style-for-image-2',
      satisfaction: 'Satisfied Team',
    },
    {
      src: 'Images/3.avif',
      alt: 'Me in Tetriskaro',
      style: 'style-for-image-3',
      satisfaction: 'Satisfied Boss :)',
    },
  ];

  let i = -1;

  images.forEach((image) => {
    const img = new Image();
    img.src = image.src;
  });

  function sectionOneFunction() {
    i++;

    if (i === images.length) {
      i = 0;
    }

    counter.textContent = (i + 1).toString().padStart(2, '0');
    updateImage();

    setTimeout(sectionOneFunction, 3000);
  }

  function updateImage() {
    const currentImage = images[i];

    headerImage.classList.remove(
      'style-for-image-1',
      'style-for-image-2',
      'style-for-image-3'
    );

    headerImage.classList.add(currentImage.style);
    satisfaction.innerHTML = `<span class="satisfaction-number">100%</span> ${currentImage.satisfaction}`;
    headerImage.src = currentImage.src;
    headerImage.alt = currentImage.alt;
  }

  sectionOneFunction();
});

// Section 2
