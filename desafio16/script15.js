const thumbnails = document.querySelector(".thumbnails")
const mainImage = document.querySelector(".main-image img")

thumbnails.addEventListener('click', (event) =>
{
    if (event.target.tagName === 'IMG') {const newSrc = event.target.src; mainImage.src = newSrc;}
});