
 // add hovered class to selected list item
 let list = document.querySelectorAll(".navigation li");

 function activeLink() {
   list.forEach((item) => {
     item.classList.remove("hovered");
   });
   this.classList.add("hovered");
 }
 
 list.forEach((item) => item.addEventListener("mouseover", activeLink));
 
 // Menu Toggle
 let toggle = document.querySelector(".toggle");
 let navigation = document.querySelector(".navigation");
 let main = document.querySelector(".main");
 
 toggle.onclick = function () {
   navigation.classList.toggle("active");
   main.classList.toggle("active");
 };
 
 


 // this is the js for the dropdown for the product section 

//  document.addEventListener("DOMContentLoaded", function () {
//     const dropdownToggles = document.querySelectorAll(".dropdown-toggle");

//     dropdownToggles.forEach(function (toggle) {
//         toggle.addEventListener("click", function (event) {
//             event.preventDefault();
//             const dropdownMenu = toggle.nextElementSibling;
//             dropdownMenu.classList.toggle("show");
//         });
//     });

//     window.addEventListener("click", function (event) {
//         dropdownToggles.forEach(function (toggle) {
//             const dropdownMenu = toggle.nextElementSibling;
//             if (!toggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
//                 dropdownMenu.classList.remove("show");
//             }
//         });
//     });
// });


// document.addEventListener("DOMContentLoaded", function() {
//     const productsLink = document.querySelector('.navigation .title');
//     const subMenu = document.querySelector('.navigation .sub-menu');
  
//     // Toggle submenu visibility when clicking on the "Products" link
//     productsLink.addEventListener('click', function(event) {
//       event.preventDefault(); // Prevent default link behavior
//       console.log("Clicked on Products link"); // Add this line for debugging
//       subMenu.classList.toggle('active'); // Toggle the 'active' class on the submenu
//     });
//   });
  


// const productList = document.querySelectorAll(".product"); // Select all elements with class "product"

// productList.forEach((product) => {
//   product.addEventListener("click", function() {
//     // Show "View Product" and "Add Product" elements
//     const viewProduct = document.querySelector(".view-product"); // Assuming class names for view and add product elements
//     const addProduct = document.querySelector(".add-product");

//     viewProduct.classList.add("show"); // Add "show" class for visibility
//     addProduct.classList.add("show");
//   });
// });

// Remove "show" class on any element click (optional)
// document.addEventListener("click", function(event) {
//   if (!event.target.classList.contains("product")) { // Check if clicked outside product
//     const viewProduct = document.querySelector(".view-product");
//     const addProduct = document.querySelector(".add-product");

//     viewProduct.classList.remove("show");
//     addProduct.classList.remove("show");
//   }
// });





// this is working 
function toggleSubMenu() {
  const subMenu = document.getElementById('productMenu');
  subMenu.classList.toggle('show');

  // Add the event listener to close the dropdown when clicked outside the parent section
  const parentSection = document.getElementById("parent-section");
  parentSection.addEventListener("click", () => {
    if (!parentSection.contains(event.target)) {
      subMenu.classList.remove("show");
    }
  });
}


