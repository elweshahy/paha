// Ceckout If There's Local Storage Color Option
let mainColors = localStorage.getItem("color_option");
if (mainColors !== null){
document.documentElement.style.setProperty("--main-color", mainColors);
// Remove Active Class Form All Colors List Item
document.querySelectorAll(".colors-list li").forEach(element => {

    element.classList.remove("active");
   // Add Active Class On Element Whth Data-Color === Local Storage Item
if (element.dataset.color === mainColors) {
    //Add Active Class 
    element.classList.add("active");
}

   });
}

// Random Background Option
let  backgroundOption = true;
// Check If There's Local Storage Random Background Interval Item
let backgroundLocalItem = localStorage.getItem("background_option")
//Check If Random Background Local Storage Is Not Empty
if (backgroundLocalItem !== null){
    if(backgroundLocalItem === 'true'){
        backgroundOption = true;
    } else {
        backgroundOption = false;
    }

// Remove Active Class From All Spans
document.querySelectorAll(".random-backgrounds span").forEach(element => {
element.classList.remove("active");
});
if (backgroundLocalItem === 'true') {
    document.querySelector(".random-backgrounds .yes").classList.add("active");   
} else {
    document.querySelector(".random-backgrounds .no").classList.add("active");
}
}


// Variables To Control The Background Interval
let backgroundInterval;

// Toggle Spin Class On Icon 
let settingsBtn = document.querySelector(".toggle-settings .fa-gear");
let openSettingsBtn = document.querySelector(".settings-box")
document.querySelector(".toggle-settings .fa-gear").onclick = function(e){
    e.stopPropagation();
    //Toggle Class Fa-spin Fur Retation On Self
    this.classList.toggle("fa-spin");
 // Toggle Class Open On Min Settings Box
    document.querySelector(".settings-box").classList.toggle("open");
};
// Click Anywhere Outside Settings Box And Toggle Button
document.addEventListener("click", (e) => {
    if (e.target !== settingsBtn  ) {
       // Check If Settings Box Is Open
       if (openSettingsBtn.classList.contains("open")) {
           settingsBtn.classList.toggle("fa-spin");
           //Toggle Class "open" On settings
           openSettingsBtn.classList.toggle("open");
       }
    }
   });



// Switch Colors
const colorsli = document.querySelectorAll(".colors-list li");
 // Loop On All List Items
colorsli.forEach(li => {
    // Click On Every List Items
    li.addEventListener("click", (e) => {
    
        // Set Color On Root
        document.documentElement.style.setProperty('--main-color', e.target.dataset.color);
        // Set Color On Local Storage 
        localStorage.setItem("color_option", e.target.dataset.color);
      handleActive(e);
    });
});

// Switch Random Background Opiton
const randomBackgroundsElement = document.querySelectorAll(".random-backgrounds span");
 // Loop On All Spans
 randomBackgroundsElement.forEach(span => {
    // Click On Every Span
    span.addEventListener("click", (e) => {
    handleActive(e);

        // Add Active Class On Self
        e.target.classList.add("active");
        if (e.target.dataset.background === 'yes') {
         backgroundOption = true;
         randomizeImgs();
         localStorage.setItem("background_option", true);

        } else {
            backgroundOption = false;
            clearInterval(backgroundInterval);
            localStorage.setItem("background_option", false);
        }
    });
});

// Select Landing Page Element
let landingPage = document.querySelector('.landing-page');

//Get Array Of Images
let imgsArray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg", "07.jpg", "08.jpg", "09.jpg", "10.jpg", "11.jpg", "12.jpg", "13.jpg", "14.jpg", "15.jpg", "16.jpg", "17.jpg", "18.jpg", "19.jpg", "20.jpg", "21.jpg", "22.jpg", "23.jpg", "24.jpg", "25.jpg" ]

// Function To Randomize Images
function randomizeImgs() {
    if(backgroundOption === true){

        backgroundInterval = setInterval(() => {
            // Get Random Number
                let randomNumber = Math.floor(Math.random() * imgsArray.length);
            //console.log(randomNumber);
            // Change Background Image Url
            landingPage.style.backgroundImage = 'url("./imgs/' + imgsArray[randomNumber]  + '")';
            }, 10000);

    };
};
randomizeImgs();



// Select Skills Selector
let ourSkills = document.querySelectorAll(".skills");
window.onscroll = function () {
 if (window.scrollY = 800) {
    let allSkills = document.querySelectorAll(".skill-box .skill-progress span");
    allSkills.forEach(skill => {
      skill.style.width = skill.dataset.progress;
    });
}

};
// Create Popup Whith The Image
let ourGallery = document.querySelectorAll(".gallery img");
ourGallery.forEach(img => {
  img.addEventListener('click', (e) => {
// Create Overlay Element
let overlay = document.createElement("div");
// Add Class To Overlay 
overlay.className = 'popup-overlay';
// Append Overlay To The Body
document.body.appendChild(overlay);
// Create The Popup Box
let popupBox = document.createElement("div");
// Add The Class T The Popup Box 
popupBox.className = "popup-box";
if (img.alt !== null) {
    //Create Heading
    let imgHeading = document.createElement("h3");
    // Create Text For Heading
    let imgText = document.createTextNode(img.alt);
    // Append The Text To The heading
    imgHeading.appendChild(imgText);
    // Append The Heading To The Popup Box
    popupBox.appendChild(imgHeading);

}
//Create The Image
let popupImage = document.createElement("img");
// Set Image Source 
popupImage.src = img.src;
// Add Image To Popup Box
popupBox.appendChild(popupImage);
// Append The Image To Body
document.body.appendChild(popupBox);
// Create The Close span
let closeButton = document.createElement("span");
// Create The Close Button Text
let closeButtonText = document.createTextNode("");
// Append Text To Close Button
closeButton.appendChild(closeButtonText);
// Add Class To Close Button
closeButton.className = "fa fa-arrow-alt-circle-left";
// Add Close Button To ThePopup Box
popupBox.appendChild(closeButton);

  });
});
// Close Popup
document.addEventListener("click", function(e){
    if (e.target.className == 'fa fa-arrow-alt-circle-left') {
        // Remove The Current Popup 
        e.target.parentElement.remove();
        // Remove Overlay
        document.querySelector('.popup-overlay').remove();
    }
})
// Select All Bullet 
const allBullets = document.querySelectorAll(".nav-bullets .bullet");
allBullets.forEach(bullet => {
    bullet.addEventListener("click", (e) => {
        document.querySelector(e.target.dataset.section).scrollIntoView({
            behavior: "smooth"
        })
    })
})
// Handle Active State
function handleActive(ev){
// Remove Active Class Form All Childrens
ev.target.parentElement.querySelectorAll(".active").forEach(element => {
    element.classList.remove("active");
});
// Add Active Class On Self
ev.target.classList.add("active");
}

// Button Show Bullet
let bulletsSpan = document.querySelectorAll(".bullets-option span");
let bulletsContainer = document.querySelector(".nav-bullets");
let bulletLocalItem = localStorage.getItem("bullets_option");

if (bulletLocalItem !== null){
  bulletsSpan.forEach(span => {
    span.classList.remove("active");
  })
  if (bulletLocalItem === 'block') {
    bulletsContainer.style.dispaly = 'block';
    document.querySelector(".bullets-option .yes").classList.add("active");
  }else {
    bulletsContainer.style.dispaly = 'none';
    document.querySelector(".bullets-option .no").classList.add("active");
  }
}
bulletsSpan.forEach(span => {
    span.addEventListener("click", (e) => {
        if(span.dataset.display === 'show'){
        bulletsContainer.style.display = 'block';
        localStorage.setItem("bullets_option", "block");
        }else {
            bulletsContainer.style.display = 'none';  
            localStorage.setItem("bullets_option", "none");
        }
        handleActive(e);
    })
})

// Reset Button
document.querySelector(".reset-options").onclick = function () {
    localStorage.removeItem("bullets_option");
    localStorage.removeItem("color_option");
    localStorage.removeItem("background_option");
    window.location.reload();
}
//Toogle Button Menu
let toggleBtn = document.querySelector(".toggle-menu");
let tLinks = document.querySelector(".lin");
toggleBtn.onclick = function (e) {
    //Stop Propagation
    e.stopPropagation();
    //Toggle Class "menu-active" On Button
    this.classList.toggle("menu-active");
    //Toggle Class "open" On links
    tLinks.classList.toggle("open");
}

// Click Anywhere Outside Menu And Toggle Button
document.addEventListener("click", (e) => {
 if (e.target !== toggleBtn && e.target !== tLinks) {
    // Check If Menu Is Open
    if (tLinks.classList.contains("open")) {
        toggleBtn.classList.toggle("menu-active");
        //Toggle Class "open" On links
        tLinks.classList.toggle("open");
    }
 }
});
// Stop Propagation on Menu
tLinks.onclick = function (e) {
    e.stopPropagation();
}
