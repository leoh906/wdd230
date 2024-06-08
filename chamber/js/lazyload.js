// let imagesToLoad = document.querySelectorAll("img[data-src]");

// let imgOptions = {
//     threshold: 0,
//     rootMargin: "0px 0px 50px 0px"
// };


  

// const loadImages = (image) => {
//   image.setAttribute("src", image.getAttribute("data-src"));
//   image.onload = () => {
//     image.removeAttribute("data-src");
//   };
// };

// imagesToLoad.forEach((img) => {
//     loadImages(img);
//   });

// if ("IntersectionObserver" in window) {
//     const observer = new IntersectionObserver((items, observer) => {
//       items.forEach((item) => {
//         if (item.isIntersecting) {
//           loadImages(item.target);
//           observer.unobserve(item.target);
//         }
//       });
//     });
//     imagesToLoad.forEach((img) => {
//       observer.observe(img);
//     });
//   } else {
//     imagesToLoad.forEach((img) => {
//       loadImages(img);
//     });
//   }
  

// Select all images with data-src attribute
let imagesToLoad = document.querySelectorAll("img[data-src]");

// Function to load images by setting the src attribute
const loadImages = (image) => {
    image.setAttribute("src", image.getAttribute("data-src"));
    image.onload = () => {
        image.removeAttribute("data-src"); // Remove data-src after loading
    };
};

// Load all images immediately
imagesToLoad.forEach((img) => {
    loadImages(img);
});
