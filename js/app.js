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
document.addEventListener('DOMContentLoaded', navBar); 
document.addEventListener('DOMContentLoaded', makeActive); 
const sections = document.querySelectorAll('section');



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
function navBar (){
	const section = document.querySelectorAll('section');
	for (let i = 0; i < section.length; i++) {		
		const sectionDataNav = section[i].dataset.nav;
		const sectionNumber = [i+1];
		// create anchor tag element for the section
		const a = document.createElement('a');	
		// setAttribute for the anchor element
		a.setAttribute('href',"#" + sectionDataNav);
		a.setAttribute('id',"anchorId" + sectionNumber);
		a.innerText = sectionDataNav;
		// create each li element inside the ul
		const li = document.createElement('li');
		// append anchor to each li
		li.appendChild(a);
		const navList = document.querySelector('#navbar__list');
		// append the li to the ul
        navList.appendChild(li);
		// add an eventListener and scroll function to the anchor tag
		document.getElementById("anchorId" + sectionNumber).addEventListener("click", function(){
			Scroll(sectionNumber)
		});
	};
}




// Add class 'active' to section when near top of viewport
function makeActive(){
	sections.forEach((section)=>{
		const container = section.getBoundingClientRect();
		if(container.top <=200 && container.bottom >=150){
			// apply active state on current section and nav link
			section.classList.add("your-active-class");
			// section.style.cssText = "background-color: blue";
			const navLink = document.querySelectorAll('li');
			navLink[i].classList.add("active");
			// navLink.style.cssText = "background-color: green";

		}
		else {
			// remove active state from other section and nav link
			section.classList.remove("your-active-class");
 			navLink[i].classList.remove("active");
		}
	})
}

// Scroll to anchor ID using scrollTO event
function Scroll (anchorId) {
	const section = document.getElementById('section'+anchorId);
	event.preventDefault();
	window.scrollTo({
		left: 0, 
		top: section.offsetTop,
		behavior: 'smooth'
	});

}

/**
 * End Main Functions
 * Begin Events
 * 
*/
// make sections active
window.addEventListener('scroll',(event)=>{
    makeActive();
})

// Build menu 


// Scroll to section on link click

// Set sections as active


