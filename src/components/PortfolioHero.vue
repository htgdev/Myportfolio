<!-- PortfolioHero.vue -->
<template>
    <div class="portfolio-container">
      <!-- Navigation -->
      <nav class="navigation">
        <div class="logo">Mohammed Kharzom</div>
        <div class="nav-links">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
          <!-- <div class="theme-toggle">
            <button aria-label="Toggle dark mode">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            </button>
          </div> -->
          <div class="download-button">
            <a id="download-btn" href="https://drive.google.com/file/d/1ujnDTK3909kRsPvqEE4Obwg9QlhWH2-f/view?usp=sharing" download target="_blank" rel="noopener" class="cv-button">Download CV</a>
          </div>
        </div>
      </nav>
  
      <!-- Hero Section -->
      <div class="hero-section">
        <div class="hero-content">
          <h1 class="hero-title">Hi, I'm Mohammed <span class="wave-emoji">👋</span></h1>
          <p class="hero-description">
            I'm a senior software engineer with over 7 years of experience crafting robust, scalable backend systems and full-stack applications. I specialize in Laravel, .NET Core, and Vue.js, and lead API architecture and integrations at HTG, delivering solutions for major brands like AEON, Tealive, and CollectCo. I'm passionate about building efficient systems, mentoring teams, and solving complex problems — always driven by clean code and purposeful design.
          </p>

          <div class="hero-details">
            <div class="location">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span>Kuala Lumpur, Malaysia</span>
            </div>

            <div class="availability">
              <span class="status-dot"></span>
              <span>Open to new opportunities & collaborations</span>
            </div>
          </div>

          <div class="social-links">
            <a href="https://www.linkedin.com/in/mohammed-kharzom-b3115b2a3/" target="_blank" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a href="mailto:kharzom.mohammed@gmail.com" aria-label="Email">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon">
                <path d="M4 4h16v16H4z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </a>
          </div>
        </div>

        <div class="hero-image">
          <div class="profile-image-container">
            <img src="../assets/myphoto.png" alt="Mohammed Kharzom - Senior Software Engineer" class="profile-image">
          </div>
        </div>
      </div>

    </div>
  </template>
  
  <script setup>
  // Vue 3 Composition API setup
  </script>
  
  <style scoped>
  /* Base Styles */
  .portfolio-container {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    background-color: #0a0a16;
    color: #ffffff;
    min-height: 100vh;
    padding: 0 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  /* Navigation */
  .navigation {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 0;
  }
  
  .logo {
    font-size: 1.5rem;
    font-weight: bold;
  }
  
  .nav-links {
    display: flex;
    align-items: center;
    gap: 2rem;
  }
  
  .nav-links a {
    color: #a0a0a0;
    text-decoration: none;
    transition: color 0.3s ease;
  }
  
  .nav-links a:hover {
    color: #ffffff;
  }
  
  .theme-toggle button {
    background: transparent;
    border: none;
    color: #ffffff;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #download-btn{
    color: #0a0a16;
    font-weight: 500;
    text-decoration: none;
    transition: background-color 0.3s ease;
  }
  
  .cv-button {
    background-color: #ffffff;
    color: #0a0a16;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    
  }
  
  .cv-button:hover {
    background-color: #919191;
  }
  
  /* Hero Section */
  .hero-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4rem 0;
    gap: 3rem;
  }
  
  .hero-content {
    flex: 3;
  }
  
  .hero-image {
    flex: 2;
    display: flex;
    justify-content: center;
  }
  
  .hero-title {
    font-size: 3.5rem;
    font-weight: bold;
    margin-bottom: 1.5rem;
    line-height: 1.2;
  }
  
  .wave-emoji {
    display: inline-block;
    animation: wave 2.5s infinite;
    transform-origin: 70% 70%;
  }
  
  @keyframes wave {
    0%, 100% { transform: rotate(0deg); }
    20% { transform: rotate(14deg); }
    40% { transform: rotate(-4deg); }
    60% { transform: rotate(10deg); }
    80% { transform: rotate(-2deg); }
  }
  
  .hero-description {
    font-size: 1.125rem;
    line-height: 1.6;
    color: #a0a0a0;
    margin-bottom: 2rem;
    max-width: 90%;
  }
  
  .hero-details {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 2rem;
  }
  
  .location, .availability {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1rem;
    color: #a0a0a0;
  }
  
  .status-dot {
    width: 10px;
    height: 10px;
    background-color: #10b981;
    border-radius: 50%;
    display: inline-block;
  }
  
  .social-links {
    display: flex;
    gap: 1.5rem;
  }
  
  .social-links a {
    color: #a0a0a0;
    transition: color 0.3s ease;
  }
  
  .social-links a:hover {
    color: #ffffff;
  }
  
  .profile-image-container {
    position: relative;
    width: 300px;
    height: 350px;
    background-color: #1e1e2e;
    border-radius: 8px;
    overflow: hidden;
  }
  
  .profile-image-container::after {
    content: "";
    position: absolute;
    bottom: -60px;
    right: -60px;
    width: 120px;
    height: 120px;
    background-color: #232335;
    border-radius: 8px;
    z-index: -1;
  }
  
  .profile-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
  }
  
  /* Responsive Styles */
  @media (max-width: 1024px) {
    .hero-section {
      flex-direction: column;
      text-align: center;
    }
  
    .hero-content {
      order: 2;
    }
  
    .hero-image {
      order: 1;
      margin-bottom: 2rem;
    }
  
    .hero-description {
      max-width: 100%;
    }
  
    .hero-details {
      align-items: center;
    }
  }
  
  @media (max-width: 768px) {
    .nav-links {
      display: none;
    }
  
    .hero-title {
      font-size: 2.5rem;
    }
  
    .profile-image-container {
      width: 250px;
      height: 300px;
    }
  }
  </style>