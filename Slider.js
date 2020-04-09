// Get Slider Items | Array.from(ES6 Feature)
var sliderImages = Array.from(document.querySelectorAll(".slider-container img"));

// Get Number Of Slides
var slidesCount = sliderImages.length;

// Set Current Slide
var currentSlide = 1;

// Slide Number Element
var slideNumberElement = document.getElementById("slide-number");

// Previous and Next Buttons
var nextButton = document.getElementById("next");
var prevButton = document.getElementById("prev");

// Handle Click on Previous and Next Buttons
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

// Create The Main Ul Element
var paginationElement = document.createElement("ul"),
    i;

// Set ID On Created Ul Element
paginationElement.setAttribute("id", "pagination-ul");

// Create List Items Based On Slides Count
for (i = 1; i <= slidesCount; i = i + 1) {
    
    // Create The Li
    var paginationItem = document.createElement("li");
    
    // Set Custom Attribute
    paginationItem.setAttribute("data-index", i);
    
    // Set Item Content
    paginationItem.appendChild(document.createTextNode(i));
    
    // Append Items To The Main Ul List
    paginationElement.appendChild(paginationItem);
}

// Add The Created Element To The Page 
document.getElementById("indicators").appendChild(paginationElement);

// Get The New Created Ul
var paginationCreatedUl = document.getElementById("pagination-ul");

// Get Slider Items | Array.from(ES6 Feature)
var paginationBullets = Array.from(document.querySelectorAll("#pagination-ul li"));

// Loop  Through All Bullets Items
for (i = 0; i < paginationBullets.length; i = i + 1) {
    
    paginationBullets[i].onclick = function () {
        
        currentSlide = parseInt(this.getAttribute("data-index"));
        
        theChecker();

    }
}

// Trigger The Checker Function
theChecker();

// Next Slide Function
function nextSlide() {
   
    if (nextButton.classList.contains("disable")) {
        
        // Do Nothing
        return false;
        
        } else {
         currentSlide++;
         theChecker();
        }
}

// Previous Slide Function
function prevSlide() {
    
if (prevButton.classList.contains("disable")) {
        
        // Do Nothing
        return false;
        
        } else {
         currentSlide--;
         theChecker();
        }}

// Create The Checker Function
function theChecker() {
    
    // Set The Slide Number
    slideNumberElement.textContent = "Slide #" + (currentSlide) + " of " + (slidesCount);
    
     // Trigeer The Remove Function
    removeActive(); 
    
    // Set Active Class On Current Slide
    sliderImages[currentSlide - 1 ].classList.add("active");
    
    // Set Active Class On Current Pagination Item
    paginationCreatedUl.children[currentSlide - 1].classList.add("active");

    // Check if Current Slide is The First
    if (currentSlide == 1) {
    
    // Add Disabled Class On Previous Button
    prevButton.classList.add("disable");
    
    } else {
    
    // Remove Disabled Class From Previous Button
    prevButton.classList.remove("disable");
    }
    
    // Check if Current Slide is The Last
    if (currentSlide == slidesCount) {
    
    // Add Disabled Class On Next Button
    nextButton.classList.add("disable");
    
    } else {
    
    // Remove Disabled Class From Next Button
    nextButton.classList.remove("disable");
    }
    
}

// Remove All Active Classes From Images And Pagination Bullets
function removeActive() {
    
    // Loop Through Images
    sliderImages.forEach(function (img) {
        
        img.classList.remove("active");
    });
    
    // Loop Through Pagination Bullets
    paginationBullets.forEach(function (bullet) {
        
        bullet.classList.remove("active");
    });
    
    
}