<template>
    <div class="skills-container">
      <div class="skills-header">
        <h2 class="skills-title">Skills</h2>
        <p class="skills-subtitle">The skills, tools and technologies I am really good at:</p>
      </div>
      
      <div class="skills-grid">
        <div v-for="skill in skills" :key="skill.name" class="skill-item">
          <div class="skill-logo">
            <img :src="skill.logo" :alt="skill.name">
          </div>
          <div class="skill-name">{{ skill.name }}</div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // Sample logos (replace these with actual logo imports)
    import javascriptLogo from '../assets/javascript-logo.png';
    import vueLogo from '../assets/vue-logo.png';
    import laravelLogo from '../assets/laravel-logo.png';
    import dotnetLogo from '../assets/dotnet-logo.png';
    import phpLogo from '../assets/php-logo.png';
    import csharpLogo from '../assets/csharp-logo.png';
    import dockerLogo from '../assets/docker-logo.png';
    import awsLogo from '../assets/aws-logo.png';
    import mysqlLogo from '../assets/mysql-logo.png';
    import sqlLogo from '../assets/sql-logo.png';
    // import mariadbLogo from '../assets/mariadb-logo.png';
    import elasticLogo from '../assets/elastic-logo.png';
    import magentoLogo from '../assets/magento-logo.png';
    import lazadaLogo from '../assets/lazada-logo.png';
    import shopifiyLogo from '../assets/shopifiy-logo.png';
    import paypalLogo from '../assets/paypal-logo.png';
    import stripeLogo from '../assets/stripe-logo.png';

    const skills = ref([
    { name: '.NET', logo: dotnetLogo },
    { name: 'C#', logo: csharpLogo },
    { name: 'PHP', logo: phpLogo },
    { name: 'Laravel', logo: laravelLogo },
    { name: 'Vue.js', logo: vueLogo },
    { name: 'JavaScript', logo: javascriptLogo },
    { name: 'Docker', logo: dockerLogo },
    { name: 'AWS', logo: awsLogo },
    { name: 'MySQL', logo: mysqlLogo },
    { name: 'MSSQL', logo: sqlLogo },
    // { name: 'MariaDB', logo: mariadbLogo },
    { name: 'ElasticSearch', logo: elasticLogo },
    { name: 'Magento', logo: magentoLogo },
    { name: 'Lazada', logo: lazadaLogo },
    { name: 'Shopifiy', logo: shopifiyLogo },
    { name: 'PayPal', logo: paypalLogo },
    { name: 'Stripe', logo: stripeLogo },

    ]);
  </script>
  
  <style scoped>
  .skills-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 1rem;
    background-color: #0a0a0a;
    color: white;
    width: 100%;
  }
  
  .skills-header {
    text-align: center;
    margin-bottom: 3rem;
  }
  
  .skills-title {
    display: inline-block;
    background-color: #333;
    color: white;
    padding: 0.5rem 2rem;
    border-radius: 20px;
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
  
  .skills-subtitle {
    font-size: 1.8rem;
    margin-top: 1rem;
  }
  
  .skills-grid {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    gap: 2rem;
    width: 100%;
    max-width: 1200px;
  }
  
  @media (max-width: 1400px) {
    .skills-grid {
      grid-template-columns: repeat(4, 1fr);
    }
  }
  
  @media (max-width: 768px) {
    .skills-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  
  @media (max-width: 480px) {
    .skills-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  
  .skill-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  
  .skill-logo {
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
  }
  
  .skill-logo img {
    max-width: 100%;
    max-height: 100%;
  }
  
  .skill-name {
    font-size: 1rem;
  }
  </style>