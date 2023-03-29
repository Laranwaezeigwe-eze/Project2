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

// ...get all the sections
const sections = document.querySelectorAll('section');
// ...get the navbar list 
const navbarList = document.querySelector('#navbar__list');




/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
	// loop through each section
	sections.forEach((section) =>{
		// ...create list item
		const navList = document.createElement('li');
		// ...create anchor element
		const a = document.createElement('a');
		// ...set anchor text to the section data-nav attribute
		a.innerText = section.getAttribute('data-nav');
		// ...set anchor href to the section id with a # 
		a.setAttribute('href',`#${section.getAttribute('id')}`);
		// append anchor to the navlist
		navList.appendChild(a);
		// append the navList to the navbar list
		navbarList.appendChild(navList);
	})
	

// Add class 'active' to section when near top of viewport
sections.forEach((section)=>{
	// add an event listener that checks if the section is near the top of the viewport
	window.addEventListener('scroll',function(){
		if(section.getBoundingClientRect().top >=0 && section.getBoundingClientRect().top <= this.window.innerHeight * 0.5) {
			// if the top of the section is within the 50% of the viewport height, add the active state
			section.classList.add('your-active-class');
		}
		else{
			// if the top of the section is not within the viewport height, remove the active state
			section.classList.remove('your-active-class');
		}
	});
});

// Highlight the navigation bar when a section is active
const navLink = document.querySelectorAll('#navbar__list a')
navLink.forEach((link) => {
		link.addEventListener('click', () => {	
			// Remove active class from all links
			navLink.forEach((link) => {
				link.classList.remove('active');
			});		
			// Add active class to a clicked link
		link.classList.add('active');
	});
});

// Make active sections highlight on scroll
// Add an event listener to the window object for scroll events
window.addEventListener('scroll', () => {
  // Get the current scroll position
  let currentScroll = window.pageYOffset;
  
  // Loop through all the sections
  sections.forEach(section => {
    // Get the position and height of the section
    let sectionTop = section.offsetTop - 50;
    let sectionHeight = section.offsetHeight;
    
    // Check if the current scroll position is inside the section
    if (currentScroll >= sectionTop && currentScroll < sectionTop + sectionHeight) {
      // Add the active class to the corresponding navigation item
      let navItem = document.querySelector(`[data-nav="${section.getAttribute('data-nav')}"]`);
      navItem.classList.add('active');
    } else {
      // Remove the active class from navigation items that are not in view
      let navItem = document.querySelector(`[data-nav="${section.getAttribute('data-nav')}"]`);
      navItem.classList.remove('active');
    }
  });
});


// Scroll to anchor using scrollIntoView method
// select the navigation link
const menuLinks = document.querySelectorAll('#navbar__list a');
menuLinks.forEach((menuLink) =>{
	// add event listener to trigger an event
	menuLink.addEventListener('click', (event) => {
		// use preventDefault to stop the default event occurring
		event.preventDefault();
		const sectionId = menuLink.getAttribute('href');
		const section = document.querySelector(sectionId);
		// use scrollIntoView() to scroll to target section using smooth scrolling behavior
		section.scrollIntoView({behavior: 'smooth'});
	});
});

// Add a scroll to top button on the page that’s only visible when the user scrolls below the fold of the page.
const scrollup = document.getElementById('scrollUp');
window.addEventListener('scroll',() => {
	// button should be visible when user scrolls vertivally from the top
	if(window.scrollY > window.innerHeight) {
		scrollup.style.display = 'block';
	} else {
		// button display is set to none
		scrollup.style.display = 'none';
	}
});
// add event listener that effect smooth scrolling behavior when going to top
scrollup.addEventListener('click', ()=> {
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	});
});

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 


// Scroll to section on link click

// Set sections as active


