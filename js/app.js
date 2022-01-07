const height = document.getElementById('root');

const navLinks = document.getElementsByClassName('nav_links');

// To activate a certain navigation tab upon clicking
function navLinkActiveFunction() {      
    for (let i = 0; i < navLinks.length; i ++) {
        const navLink = navLinks[i];
        navLink.addEventListener('click', function() {
            let current = document.getElementsByClassName('active');
            current[0].className = current[0].className.replace('active', '');
            this.className += ' active';
        });
    }
}

navLinkActiveFunction();

const heightOfDevice = window.innerHeight;
const to_top = document.getElementsByClassName('scroll_to_top')[0];

function removeActiveState() {
    for (let i = 0; i < navLinks.length; i ++) {
        if (navLinks[i].classList.contains('active')) navLinks[i].classList.remove('active');
    }
}

// The button at the bottom right corner to take you to the top of the web page
const toTopButton = document.getElementsByClassName('to_top_button')[0];
toTopButton.addEventListener('click', function() {
    window.scrollTo({
        top: 0, left: 0, behavior: 'smooth'
    });

    removeActiveState();
    to_top.classList.add('active');
});

// The navigation area for scrolling throughout the page
to_top.addEventListener('click', function() {
    window.scrollTo({
        top: 0, left: 0, behavior: 'smooth'
    });
});

const scrollToAbout = document.getElementsByClassName('scroll_to_about')[0];
scrollToAbout.addEventListener('click', function() {
    window.scrollTo({
        top: heightOfDevice, left: 0, behavior: 'smooth'
    });
});

const scrollToSkills = document.getElementsByClassName('scroll_to_skills')[0];
scrollToSkills.addEventListener('click', function() {
    const n = (window.innerWidth >= 1300)? heightOfDevice : 2 * heightOfDevice;
        window.scrollTo({
            top: n + 40, left: 0, behavior: 'smooth'
        });
});

const scrollToContact = document.getElementsByClassName('scroll_to_contact')[0];
scrollToContact.addEventListener('click', function() {
    const n = (window.innerWidth >= 1300)? 2 * heightOfDevice : 3 * heightOfDevice;
        window.scrollTo({
            top: n + 40, left: 0, behavior: 'smooth'
        });
});

// Changing the navigation active state upon scrolling through the document
window.addEventListener('scroll', function() {
    if (window.innerWidth >= 1300) {
        if (window.pageYOffset >= 1584 - 396) {
            removeActiveState();
            scrollToContact.classList.add('active');
        }
        else if (window.pageYOffset >= 792 - 396) {
            removeActiveState();
            scrollToSkills.classList.add('active');
        }        
        else if (window.pageYOffset >= 0) {
            removeActiveState();
            to_top.classList.add('active');
        }
    }
    else {
        if (window.pageYOffset >= 2376 - 396) {
            removeActiveState();
            scrollToSkills.classList.add('active');
        }
        else if (window.pageYOffset >= 1584 - 396) {
            removeActiveState();
            scrollToSkills.classList.add('active');
        }
        else if (window.pageYOffset >= 792 - 396) {
            removeActiveState();
            scrollToAbout.classList.add('active');
        }        
        else if (window.pageYOffset >= 0) {
            removeActiveState();
            to_top.classList.add('active');
        }
    }
});