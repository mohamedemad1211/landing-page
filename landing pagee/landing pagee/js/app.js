/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


const navbarMenu = document.getElementById('navbar__list');
const sectionsArray = Array.from(document.querySelectorAll('section'));
let totalSections = sectionsArray.length;


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
// Generate menu items based on sections
function generateMenuItems() {
    for (const singleSection of sectionsArray) {
        const sectionName = singleSection.getAttribute('data-nav');
        const sectionId = singleSection.getAttribute('id');
        // Create a list item for each section
        const menuItem = document.createElement('li');
        // Add text and link to menu items
        menuItem.innerHTML = `<a class='menu__link' href='#${sectionId}'>${sectionName}</a>`;
        // Append the item to the menu
        navbarMenu.appendChild(menuItem);
    }
}

// Check if the section is in the middle of the viewport
let isSectionViewed = (section) => {
    const rect = section.getBoundingClientRect();
    return rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
};

// Activate/deactivate sections and menu links
function toggleActiveClass() {
    sectionsArray.forEach((singleSection) => {
        const sectionId = singleSection.getAttribute('id');
        const navLink = document.querySelector(`a[href="#${sectionId}"]`);

        if (isSectionViewed(singleSection)) {
            singleSection.classList.add('your-active-class');
            navLink.classList.add('active'); // Add active class to the link
        } else {
            singleSection.classList.remove('your-active-class');
            navLink.classList.remove('active'); // Remove active class when section is out of view
        }
    });
}

// Smooth scroll on menu link click
navbarMenu.addEventListener('click', function(event) {
    event.preventDefault();
    if (event.target.classList.contains('menu__link')) {
        const targetId = event.target.getAttribute('href').slice(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    }
});



generateMenuItems();
// Add scroll event listener to check which section is in the viewport
document.addEventListener('scroll', toggleActiveClass);

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


