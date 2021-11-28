// Manipulate ClassList in Nav & Sections to highlight ACTIVE
// 1.  Define variable Nav LIST ITEMS and SECTIONS
const navLi = document.querySelectorAll('nav .container ul li');
const sections = document.querySelectorAll('section');

// 2. Set Event listener & CURRENT POSITION VARIABLE
window.addEventListener('scroll', ()=> {
  let current = '';

// 3. Track SECTIONS based off their Y axis
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

// 4. Re-define the 'CURRENT' variable based off Y scroll
    if(scrollY >= (sectionTop - sectionHeight / 3)) {
      current = section.getAttribute('id');
    }
  })

// 5. Modify ACTIVE status on ClassLists
  navLi.forEach (li => {
    li.classList.remove('active');
    if(li.classList.contains(current)){
      li.classList.add('active')
    }
  })
  sections.forEach (section => {
    section.classList.remove('active');
    if(section.classList.contains(current)){
      section.classList.add('active')
    }
  })
})

// Scroll to Top Button 
// 1. Tag Button & Root Element
const scrollToTopBtn = document.getElementById('scrollToTopBtn');
const rootElement = document.documentElement;

// 2. Set scroll Location function based off Y axis
  function scrollLoc() {
    const scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;

// 3. Display the button if more than 80% scroll
    if ((rootElement.scrollTop / scrollTotal ) > 0.80 ) {
      scrollToTopBtn.classList.add('showBtn')
    } else {
      scrollToTopBtn.classList.remove('showBtn')
    }
  }
// 4. Add the Event Listener to the document & trigger Scroll Location
document.addEventListener('scroll', scrollLoc);

// 5. Define the scrollToTop functionality 
  function scrollToTop() {
    rootElement.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
// 6. Set Event click on button & Trigger scrollToTop
scrollToTopBtn.addEventListener('click', scrollToTop);

/******* BUILD OUT NAV MENU DYNAMICALLY ******/

// 1. Define variable for Nav Menu list
const navList = document.querySelectorAll('nav-list');

// 2. Create the new li elements
const newItem = document.createElement('li');

// 3. Populate elements with HTML structure
newItem.innerHTML = '<li class="New Section"><a href="#new-section">New Section</a></li';

/******** CREATE NEW SECTION AND POPULATE HTML *****/

// 1. Define variable for main content section
const contentArea = document.getElementById('content');

// 2. Create the new section elements
const newSect = document.createElement('section');

// 3. Populate elements with HTML structure
newSect.innerHTML = '<section id="section-home"><h1>NEW SECTION</h1><br><p><b>Lorem ipsum dolor</b> sit amet consectetur adipisicing elit. Veniam earum ab deleniti corporis eius aut sequi sapiente voluptatem provident animi culpa fuga repudiandae doloremque dignissimos laboriosam error mollitia beatae aliquid, possimus harum. Velit, adipisci dolores!</p><br><em>Lorem ipsum dolor</b> sit amet, consectetur adipisicing elit. Ad, sint.</em></p></section>';


// Function to bring it all together 
  function createPage () {
    const newItem = document.createElement('li');
    newItem.innerHTML = '<li class="New Section"><a href="#new-section">New Section</a></li';
    const contentArea = document.getElementById('content');
    const newSect = document.createElement('section');
    newSect.innerHTML = '<section id="section-home"><h1>NEW SECTION</h1><br><p><b>Lorem ipsum dolor</b> sit amet consectetur adipisicing elit. Veniam earum ab deleniti corporis eius aut sequi sapiente voluptatem provident animi culpa fuga repudiandae doloremque dignissimos laboriosam error mollitia beatae aliquid, possimus harum. Velit, adipisci dolores!</p><br><em>Lorem ipsum dolor</b> sit amet, consectetur adipisicing elit. Ad, sint.</em></p></section>';
    navList.appendChild(newItem);
    contentArea.appendChild(newSect);
    console.log('elements added');
  }

// Tag the Nav section with Click Event
const newPage = document.getElementById('new_page');
const newPageBtn = document.getElementsByClassName('new-page');

const homeSection = document.getElementById('section-home');
homeSection.addEventListener('click', function() {
  console.log('home clicked!')
})

////////////// SUNDAY EVENING ////////
const navList = document.getElementById('nav-list');

const newItem = document.createElement('li');

newItem.innerHTML = '<li class="New Section"><a href="#new-section">New Section</a></li';


// 1. Define variable for main content section
const contentArea = document.getElementById('content');
// 2. Create the new section elements
const newSect = document.createElement('section');
// 3. Populate elements with HTML structure
newSect.innerHTML = '<section id="section-home"><h1>NEW SECTION</h1><br><p><b>Lorem ipsum dolor</b> sit amet consectetur adipisicing elit. Veniam earum ab deleniti corporis eius aut sequi sapiente voluptatem provident animi culpa fuga repudiandae doloremque dignissimos laboriosam error mollitia beatae aliquid, possimus harum. Velit, adipisci dolores!</p><br><em>Lorem ipsum dolor</b> sit amet, consectetur adipisicing elit. Ad, sint.</em></p></section>';


// Function to bring it all together 
  function createPage () {
    const newItem = document.createElement('li');
    newItem.innerHTML = '<li class="section-new"><a href="#section-new">New Section</a></li';
    const contentArea = document.getElementById('content');
    const newSect = document.createElement('section');
    newSect.innerHTML = '<section id="section-home"><h1>NEW SECTION</h1><br><p><b>Lorem ipsum dolor</b> sit amet consectetur adipisicing elit. Veniam earum ab deleniti corporis eius aut sequi sapiente voluptatem provident animi culpa fuga repudiandae doloremque dignissimos laboriosam error mollitia beatae aliquid, possimus harum. Velit, adipisci dolores!</p><br><em>Lorem ipsum dolor</b> sit amet, consectetur adipisicing elit. Ad, sint.</em></p></section>';
    navList.appendChild(newItem);
    contentArea.appendChild(newSect);
    console.log('elements added');
  }

// Tag the Nav section with Click Event
/*const newPageBtn = document.getElementById('new_page .new-page');

newPageBtn.addEventListener('click', createPage);*/

const newButton = document.getElementById('NEW-Button');
newButton.addEventListener('click', createPage);
/*newButton.click(function(event) {
  event.preventDefault
})*/

/*const homeSection = document.getElementById('section-home');
homeSection.addEventListener('click', function() {
  console.log('home clicked!')
})*/




// Manipulate ClassList in Nav & Sections to highlight ACTIVE
// 1.  Define variable Nav LIST ITEMS and SECTIONS
const navLi = document.querySelectorAll('nav .container ul li');
const sections = document.querySelectorAll('section');

// 2. Set Event listener & CURRENT POSITION VARIABLE
window.addEventListener('scroll', ()=> {
  let current = '';

// 3. Track SECTIONS based off their Y axis
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

// 4. Re-define the 'CURRENT' variable based off Y scroll
    if(scrollY >= (sectionTop - sectionHeight / 3)) {
      current = section.getAttribute('id');
    }
  })

// 5. Modify ACTIVE status on ClassLists
  navLi.forEach (li => {
    li.classList.remove('active');
    if(li.classList.contains(current)){
      li.classList.add('active')
    }
  })
  sections.forEach (section => {
    section.classList.remove('active');
    if(section.classList.contains(current)){
      section.classList.add('active')
    }
  })
})

// Scroll to Top Button 
// 1. Tag Button & Root Element
const scrollToTopBtn = document.getElementById('scrollToTopBtn');
const rootElement = document.documentElement;

// 2. Set scroll Location function based off Y axis
  function scrollLoc() {
    const scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;

// 3. Display the button if more than 80% scroll
    if ((rootElement.scrollTop / scrollTotal ) > 0.80 ) {
      scrollToTopBtn.classList.add('showBtn')
    } else {
      scrollToTopBtn.classList.remove('showBtn')
    }
  }
// 4. Add the Event Listener to the document & trigger Scroll Location
document.addEventListener('scroll', scrollLoc);

// 5. Define the scrollToTop functionality 
  function scrollToTop() {
    rootElement.scrollTo({
      top: 0,
      /*behavior: 'smooth'*/
    })
  }
// 6. Set Event click on button & Trigger scrollToTop
scrollToTopBtn.addEventListener('click', scrollToTop);

