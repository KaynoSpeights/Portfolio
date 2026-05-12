// ===== THEME TOGGLE =====
const html = document.documentElement;
const themeToggle = document.querySelector('.theme-toggle');
const hamburgerBtn = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
  html.classList.add('dark-mode');
}

themeToggle.addEventListener('click', () => {
  html.classList.toggle('dark-mode');
  const theme = html.classList.contains('dark-mode') ? 'dark' : 'light';
  localStorage.setItem('theme', theme);
  updateThemeIcon();
});

function updateThemeIcon() {
  const isDark = html.classList.contains('dark-mode');
  themeToggle.textContent = isDark ? '☀️' : '🌙';
}

// Initialize theme icon
updateThemeIcon();

// ===== HAMBURGER MENU =====
if (hamburgerBtn) {
  hamburgerBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // Animate hamburger lines
    const spans = hamburgerBtn.querySelectorAll('span');
    spans.forEach((span, index) => {
      if (navLinks.classList.contains('active')) {
        if (index === 0) {
          span.style.transform = 'rotate(45deg) translateY(15px)';
        } else if (index === 1) {
          span.style.opacity = '0';
        } else {
          span.style.transform = 'rotate(-45deg) translateY(-15px)';
        }
      } else {
        span.style.transform = 'none';
        span.style.opacity = '1';
      }
    });
  });

  // Close menu when a link is clicked
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      hamburgerBtn.querySelectorAll('span').forEach(span => {
        span.style.transform = 'none';
        span.style.opacity = '1';
      });
    });
  });
}

// ===== ACTIVE NAV LINK =====
function updateActiveLink() {
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.nav-links a');

  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });

  navItems.forEach(item => {
    item.classList.remove('active');
    if (item.getAttribute('href').slice(1) === current) {
      item.classList.add('active');
    }
  });
}

window.addEventListener('scroll', updateActiveLink);

// ===== UNIVERSAL SCROLL ANIMATIONS (Intersection Observer) =====
const scrollObserverOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const scrollObserver = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting && !entry.target.classList.contains('visible')) {
      const element = entry.target;
      
      // Determine animation type based on element classes
      let animationType = 'fadeInUp'; // default
      let duration = '0.6s';
      
      if (element.classList.contains('scroll-animate-left')) {
        animationType = 'slideInFromLeft';
        duration = '0.7s';
      } else if (element.classList.contains('scroll-animate-right')) {
        animationType = 'slideInFromRight';
        duration = '0.7s';
      } else if (element.classList.contains('scroll-animate-card')) {
        animationType = 'scaleIn';
        duration = '0.6s';
      } else if (element.classList.contains('scroll-animate-skill')) {
        animationType = 'zoomIn';
        duration = '0.6s';
      } else if (element.classList.contains('scroll-animate-timeline')) {
        animationType = 'expandDown';
        duration = '0.7s';
      } else if (element.classList.contains('scroll-animate-form')) {
        animationType = 'fadeInUp';
        duration = '0.6s';
      } else if (element.classList.contains('project-card-scroll-animation')) {
        animationType = 'slideInFromLeft';
        duration = '0.7s';
      }
      
      // Calculate stagger index from siblings
      let staggerIndex = 0;
      if (element.parentElement) {
        const siblings = Array.from(element.parentElement.children).filter(child => 
          child.classList.contains('scroll-animate-card') ||
          child.classList.contains('scroll-animate-left') ||
          child.classList.contains('scroll-animate-right') ||
          child.classList.contains('scroll-animate-skill') ||
          child.classList.contains('scroll-animate-form') ||
          child.classList.contains('fade-in-on-scroll') ||
          child.classList.contains('project-card-scroll-animation')
        );
        staggerIndex = siblings.indexOf(element);
      }
      
      const staggerDelay = staggerIndex * 0.12;
      
      // Apply animation
      element.classList.add('visible');
      element.style.animation = `${animationType} ${duration} ease-out ${staggerDelay}s both`;
      
      // Add hover effect for interactive elements
      if (element.classList.contains('scroll-animate-card') || 
          element.classList.contains('project-card-scroll-animation')) {
        element.style.cursor = 'pointer';
        element.addEventListener('mouseenter', () => {
          element.style.transform = 'translateY(-5px)';
        });
        element.addEventListener('mouseleave', () => {
          element.style.transform = 'translateY(0)';
        });
      }
    }
  });
}, scrollObserverOptions);

// Observe all scroll-animated elements
document.querySelectorAll(
  '.scroll-animate-card, .scroll-animate-left, .scroll-animate-right, ' +
  '.scroll-animate-timeline, .scroll-animate-skill, .scroll-animate-form, ' +
  '.fade-in-on-scroll, .project-card-scroll-animation'
).forEach(el => {
  scrollObserver.observe(el);
});

// ===== IMMEDIATE VISIBILITY FOR ELEMENTS ALREADY IN VIEWPORT ON PAGE LOAD =====
window.addEventListener('load', () => {
  const allAnimatedElements = document.querySelectorAll(
    '.scroll-animate-card, .scroll-animate-left, .scroll-animate-right, ' +
    '.scroll-animate-timeline, .scroll-animate-skill, .scroll-animate-form, ' +
    '.fade-in-on-scroll, .project-card-scroll-animation'
  );
  
  allAnimatedElements.forEach(element => {
    if (!element.classList.contains('visible')) {
      const rect = element.getBoundingClientRect();
      const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
      
      if (isInViewport) {
        // Mark as visible immediately without animation for page-load case
        element.classList.add('visible');
        element.style.animation = 'none';
      }
    }
  });
});

// ===== PARALLAX EFFECT =====
let ticking = false;

window.addEventListener('scroll', () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      const parallaxElements = document.querySelectorAll('[data-parallax]');
      const scrollY = window.pageYOffset;

      parallaxElements.forEach(el => {
        const speed = el.dataset.parallax || 0.5;
        el.style.transform = `translateY(${scrollY * speed}px)`;
      });

      ticking = false;
    });

    ticking = true;
  }
});

// ===== SMOOTH SCROLL ANCHOR LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#') {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  });
});

// ===== RESUME VIEWER =====
const resumeInput = document.querySelector('#resumeInput');

function displayResume() {
  const resumeViewer = document.querySelector('.resume-viewer');

  if (resumeViewer) {
    // Load resume from documents folder
    const resumePath = 'assets/documents/Kayno Speights.pdf';
    const encodedResumePath = encodeURI(resumePath);
    
    resumeViewer.innerHTML = `
      <object data="${encodedResumePath}#view=FitH" type="application/pdf" width="100%" height="100%">
        <p style="padding: 1rem; color: inherit;">
          Your browser does not support embedded PDFs. 
          <a href="${encodedResumePath}" target="_blank" rel="noopener noreferrer">Open the resume in a new tab</a>.
        </p>
      </object>
    `;
  }
}

if (resumeInput) {
  const resumeUpload = document.querySelector('.resume-upload');
  if (resumeUpload) {
    resumeUpload.addEventListener('click', () => resumeInput.click());
  }

  resumeInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        localStorage.setItem('userResume', event.target.result);
        localStorage.setItem('resumeFileName', file.name);
        alert(`Resume "${file.name}" uploaded successfully!`);
        displayResume();
      };
      reader.readAsDataURL(file);
    }
  });
}

// Load resume on page load
displayResume();

// ===== CONTACT FORM =====
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = {
      name: document.querySelector('#name').value,
      email: document.querySelector('#email').value,
      subject: document.querySelector('#subject').value,
      message: document.querySelector('#message').value,
      timestamp: new Date().toISOString()
    };

    // Save to localStorage (for demonstration)
    // In production, you'd send this to a backend API
    let messages = JSON.parse(localStorage.getItem('contactMessages') || '[]');
    messages.push(formData);
    localStorage.setItem('contactMessages', JSON.stringify(messages));

    // Show success message
    const successMsg = document.createElement('div');
    successMsg.className = 'success-message';
    successMsg.textContent = '✓ Message sent successfully!';
    successMsg.style.cssText = `
      background: #2d5016;
      color: white;
      padding: 1rem;
      border-radius: 0.5rem;
      margin-bottom: 1rem;
      text-align: center;
      animation: slideInDown 0.3s ease-out;
    `;

    contactForm.prepend(successMsg);

    // Reset form
    contactForm.reset();

    // Remove success message after 3 seconds
    setTimeout(() => successMsg.remove(), 3000);
  });
}

// ===== ANIMATE NUMBER COUNTERS =====
function animateCounter(element, target, duration = 2000) {
  let current = 0;
  const increment = target / (duration / 16);
  const counter = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target;
      clearInterval(counter);
    } else {
      element.textContent = Math.floor(current);
    }
  }, 16);
}

// Observe counters for animation
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
      entry.target.classList.add('animated');
      const counters = entry.target.querySelectorAll('[data-counter]');
      counters.forEach(counter => {
        const target = parseInt(counter.dataset.counter);
        animateCounter(counter, target);
      });
    }
  });
});

document.querySelectorAll('[data-counter-container]').forEach(el => {
  counterObserver.observe(el);
});

// ===== PROJECT DATA =====
// This can be modified to load from a JSON file or database
const projects = [
  {
    id: 1,
    title: 'Project One',
    description: 'Replace this with your first major project description. Explain what it does and the impact it had.',
    tech: 'Java',
    github: '#'
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'Replace this with your second major project description. Include the challenges you overcame.',
    tech: 'Python',
    github: '#'
  },
  {
    id: 3,
    title: 'Project Three',
    description: 'Replace this with your third major project description. Share what you learned from it.',
    tech: 'JavaScript',
    github: '#'
  }
];

// ===== LAZY LOAD IMAGES =====
const images = document.querySelectorAll('img[data-src]');

const imageObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      img.removeAttribute('data-src');
      observer.unobserve(img);
    }
  });
});

images.forEach(img => imageObserver.observe(img));

// ===== UTILITY: SCROLL TO TOP BUTTON =====
const scrollToTopBtn = document.querySelector('.scroll-to-top');

if (scrollToTopBtn) {
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      scrollToTopBtn.style.display = 'block';
    } else {
      scrollToTopBtn.style.display = 'none';
    }
  });

  scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// ===== CONSOLE MESSAGE =====
console.log('%cWelcome to my portfolio! 🌿', 'color: #2d5016; font-size: 16px; font-weight: bold;');
console.log('%cFeel free to explore and reach out!', 'color: #4a4a4a; font-size: 14px;');
