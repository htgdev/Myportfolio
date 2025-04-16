<template>
    <div id="about" class="about-me-container">
      <div class="button-container">
        <button class="about-me-button">About Me</button>
      </div>
  
      <div class="content-container">
        <div class="image-container">
          <img :src="profileImage" alt="Profile picture" class="profile-image" />
        </div>
  
        <div class="text-container">
          <h1 class="title">Curious about me? Here you have it:</h1>
  
          <p class="paragraph">
            I'm a passionate <span class="highlight">Senior Software Engineer</span> with over 7 years of experience building scalable backend systems, internal APIs, and service-oriented architectures. I thrive on solving complex technical problems and translating business needs into efficient solutions.
          </p>
  
          <p class="paragraph">
            I’m currently leading backend/API development at HTG, where I’ve worked on high-impact projects for brands like AEON, Tealive, Baskbear, and CollectCo. I specialize in Laravel, .NET Core, Docker, and AWS, and I enjoy mentoring junior developers and optimizing systems for performance, reliability, and clean code.
          </p>
  
          <p class="paragraph">
            With dual master’s degrees in Mechatronics and Automation Engineering, I bring a strong understanding of hardware-software integration to my work. My approach is hands-on, modular, and always focused on delivering maintainable systems with solid documentation and token-secured architecture.
          </p>
  
          <p class="paragraph">
            I’ve also taught C++ and Java as a university instructor, and I love sharing knowledge through mentorship and team collaboration. Whether it’s building APIs, designing robust system flows, or guiding others through technical challenges — I’m always up for it.
          </p>
  
          <p class="paragraph">
            When I’m not coding, you’ll find me exploring game development ideas, following indie dev projects, or learning something new. You can connect with me on <a href="https://www.linkedin.com/in/mohammed-kharzom-b3115b2a3/" class="github-link" target="_blank">LinkedIn</a> or drop me a message if you want to collaborate!
          </p>
  
          <p class="paragraph">Some quick facts about me:</p>
  
          <div class="list-container">
            <ul class="list-column">
              <li>M.S. Mechatronics Engineering (in progress)</li>
              <li>Ex-university instructor (C++, Java)</li>
            </ul>
            <ul class="list-column">
              <li>API Architecture & DevOps focused</li>
              <li>Hands-on Laravel / .NET Core lead</li>
            </ul>
          </div>
  
          <p class="paragraph">
            Currently open to impactful tech opportunities — let’s build something awesome together! <span class="emoji">🚀</span>
          </p>
        </div>
      </div>
    </div>
  </template>
  
  
  <script setup>
  import { ref } from 'vue';
  import aboutImage from '../assets/about.png' ;
  
  // Profile image URL - replace with actual image URL in production
  const profileImage = ref(aboutImage);
  </script>
  
  <style scoped>
  .about-me-container {
    background-color: #111827;
    color: white;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 2rem;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .button-container {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
  }
  
  .about-me-button {
    background-color: rgba(255, 255, 255, 0.1);
    color: white;
    padding: 0.5rem 1.5rem;
    border: none;
    border-radius: 2rem;
    font-size: 1rem;
    cursor: pointer;
  }
  
  .content-container {
    display: flex;
    max-width: 1200px;
    gap: 2rem;
  }
  
  .image-container {
    flex: 1;
    display: flex;
    justify-content: center;
  }
  
  .profile-image {
    max-width: 100%;
    border-radius: 0.5rem;
    object-fit: cover;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .text-container {
    flex: 1.5;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  
  .title {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }
  
  .paragraph {
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 0.5rem;
  }
  
  .highlight {
    text-decoration: underline;
  }
  
  .github-link {
    color: white;
    text-decoration: underline;
  }
  
  .list-container {
    display: flex;
    gap: 5rem;
    margin: 1rem 0;
  }
  
  .list-column {
    list-style: disc;
    padding-left: 1.5rem;
  }
  
  .list-column li {
    margin-bottom: 0.5rem;
  }
  
  .emoji {
    font-style: normal;
  }
  
  @media (max-width: 768px) {
    .content-container {
      flex-direction: column;
    }
    
    .image-container {
      order: 1;
    }
    
    .text-container {
      order: 2;
    }
  }
  </style>