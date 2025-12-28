

const typed = new Typed('.typing', {
    strings: [
        'an instructor',
        'an IT Support Specialist', 
        'an ICT Coordinator',
        'a Web Content Administrator / Web Support Assistant',
        'a Data Entry Officer / Digital Admin Assistant'
    ],
    typeSpeed: 100,
    backSpeed: 60,
    backDelay: 1500,
    loop: true
});

const nav = document.querySelector('.nav'),
      navList = nav.querySelectorAll('li'),
      allSections = document.querySelectorAll('.section'),
      navTogglerBtn = document.querySelector('.nav-toggler'),
      aside = document.querySelector('.aside'),
      totalSection = allSections.length;

// Navigation click handling
for (let i = 0; i < navList.length; i++) {
    const a = navList[i].querySelector('a');
    a.addEventListener('click', function (e) {
        e.preventDefault();
        updateSection(this);
        if (window.innerWidth < 1200) {
            asideSectionTogglerBtn();
        }
    });
}

// Add listener for "Hire Me" button
document.querySelector('.hire-me').addEventListener('click', function (e) {
    e.preventDefault();
    updateSection(this);
});

// Core section switching logic
function updateSection(element) {
    // Remove back-section class from all
    allSections.forEach(section => {
        section.classList.remove('back-section');
    });

    // Add back-section to currently active section
    for (let j = 0; j < navList.length; j++) {
        const currentA = navList[j].querySelector('a');
        if (currentA.classList.contains('active')) {
            allSections[j].classList.add('back-section');
        }
        currentA.classList.remove('active');
    }

    // If it's a nav item, activate it
    if (element.classList.contains('nav-link') || element.closest('.nav')) {
        element.classList.add('active');
    }

    showSection(element);
}

// Show section by ID from href
function showSection(element) {
    const target = element.getAttribute('href').split('#')[1];
    allSections.forEach(section => section.classList.remove('active'));
    document.getElementById(target).classList.add('active');
}

// Toggle sidebar (for small screens)
navTogglerBtn.addEventListener('click', () => {
    asideSectionTogglerBtn();
});

function asideSectionTogglerBtn() {
    aside.classList.toggle('open');
    navTogglerBtn.classList.toggle('open');
    for (let i = 0; i < totalSection; i++) {
        allSections[i].classList.toggle('open');
    }
}

// Navigation section switching and updating the hash in the URL
document.querySelectorAll(".nav a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault(); // Prevent default anchor behavior

        // Get the target section ID from the href
        const targetId = this.getAttribute("href").substring(1);

        // Update active nav link
        document.querySelectorAll(".nav a").forEach(nav => nav.classList.remove("active"));
        this.classList.add("active");

        // Hide all sections
        document.querySelectorAll(".section").forEach(section => section.classList.remove("active"));

        // Show the target section
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.classList.add("active");

          
        }
    });
});
