<script setup>
import { ref } from 'vue';
import aeonImage from '../assets/Aeon.png';
import loobImage from '../assets/Loob.png';
import CollectCo from '../assets/CollectCo.png';
import GRBimage from '../assets/GRB.png';
import SNTimage from '../assets/SNT.png';
import MaltepeImage from '../assets/Maltepe.png';
import buyitfromturkey from '../assets/buyitfromturkey.png';
import nezihpark from '../assets/nezihpark.png';

function openLink(url) {
  window.open(url, '_blank') // or use `location.href = url` for same-tab navigation
}

const props = defineProps({
  projects: {
    type: Array,
    default: () => [
      {
        id: 1,
        title: 'AEON Mall Landing Zone',
        description: 'An internal platform to manage mall operations, supplier registration, unit allocation, and reporting. Designed to streamline AEON’s digital operations with a service-oriented backend and Vue-based frontend.',
        image: aeonImage,
        technologies: [
          'Vue 3', 'PrimeVue', 'Vite', 'Laravel', 
          '.NET Core', 'MariaDB', 'Docker', 'REST API' , 'MicroServices'
        ],
        link: '',
        imagePosition: 'left'
      },
      {
        id: 2,
        title: 'GRP Printing Integration',
        description: 'A specialized .NET-based solution developed for GRB Digital Solution, integrating various Fuji Xerox and Canon multi-function printers to streamline retail printing operations. The system supports real-time printing of receipts, delivery notes, and product labels, tailored for small to medium-sized businesses. It also supports flexible rental workflows, service maintenance logging, and sales document automation, ensuring reliability in high-demand retail environments.',
        image: GRBimage,
        technologies: [
          '.NET', 'C#', 'SNMP', 'React.js', 'WDS',
          'Windows Services', 'Fuji Xerox APIs', 'Canon SDK'
        ],
        link: 'http://43.217.73.62:44384/',
        imagePosition: 'right'
      },
      {
        id: 3,
        title: 'SNT Global Logistics Sdn. Bhd (Iweb Marketplace)',
        description: 'An enterprise-level omnichannel logistics and fulfillment management system built for SNT Global Logistics to centralize and automate operations across Southeast Asia’s top marketplaces including Magento, Lazada, Shopee, Shopify, and TikTok. The platform enables real-time product creation, stock syncing per channel, order tracking, and finance data integration with AutoCount. Built with a robust .NET backend and a Next.js frontend for a seamless user experience.',
        image: SNTimage,
        technologies: [
          '.NET', 'C#', 'Next.js', 'REST APIs', 'AutoCount Integration',
          'Magento', 'Lazada', 'Shopee', 'Shopify', 'TikTok',
          'Marketplace SDKs', 'SQL Server'
        ],
        link: 'https://103.21.32.143:8829/',
        imagePosition: 'left'
      },
      {
        id: 4,
        title: 'Tealive & Baskbear',
        description: `A comprehensive food and beverage ordering platform built for Tealive and Baskbear brands, supporting over 850 outlets across Malaysia. Users can place orders for pickup or opt for delivery using integrated services like Lalamove, PandaGo, and Grab Express. The backend was developed in Laravel 8, with mobile apps built using Flutter for both Android and iOS. The system includes payment integration via eGHL and POS sync through Xilnex. Deployed on AWS with CI/CD managed via GitLab.<br><br>
        <a href="https://www.tealive.com.my" target="_blank" style="color: #d1d5db;">www.tealive.com.my</a><br>
        <a href="https://www.baskbear.com" target="_blank" style="color: #d1d5db;">www.baskbear.com</a>`,
        image: loobImage,
        technologies: [
          'Laravel', 'Flutter', 'MySQL', 'AWS', 'Redis',
          'Docker', 'GitLab CI/CD', 'eGHL', 'Xilnex', 
          'Lalamove API', 'PandaGo API', 'Grab Express API'
        ],
        link: '',
        imagePosition: 'left'
      },
      {
        id: 5,
        title: 'CollectCo System Refactoring & Modernization',
        description: 'A full-scale refactoring of CollectCo’s multi-panel logistics platform, including the admin panel, sender panel, customer panel, analytics dashboard, API gateway, and central panel. Migrated legacy PHP 5 codebase to modern PHP 8.2 with Laravel, improving performance, security, and scalability. The system manages nationwide delivery orders across multiple carriers such as DHL, J&T, Flash Express, and more. Deployed on AWS using Elastic Beanstalk with internal JWT-secured microservices communication.',
        image: CollectCo,
        technologies: [
          'Laravel', 'PHP 8.2', 'API Gateway', 'JWT', 'AWS Elastic Beanstalk',
          'MySQL', 'Docker', 'Git', 'Nginx', 'Microservices'
        ],
        link: 'https://collectco.my/',
        imagePosition: 'right'
      },
      {
        id: 6,
        title: 'Maltepe University Website and Admin Panel',
        description: 'A comprehensive hospital management and public website platform built for Maltepe University Faculty of Medicine Hospitals. Developed with PHP Laravel, it enables appointment scheduling, doctor and pharmacy information management, and supports dynamic blog content contributed by doctors. Strong focus was placed on SEO optimization and Google Search indexing to boost online presence and content visibility.',
        image: MaltepeImage,
        technologies: [
          'PHP', 'Laravel', 'MySQL', 'Blade Templating', 'SEO Optimization',
          'Google Structured Data', 'Bootstrap'
        ],
        link: 'https://maltepehastanesi.com.tr/en',
        imagePosition: 'right'
      },
      {
        id: 7,
        title: 'Buy It From Turkey',
        description: 'An e-commerce platform focused on promoting and selling locally made Turkish products. Integrated a ChatGPT-powered assistant that dynamically pulls data from the product database to answer customer inquiries and suggest the most suitable items. The chat experience is powered by the ChatGPT Assistant API, which manages contextual conversations through thread creation and response flow.',
        image: buyitfromturkey,
        technologies: [
          'PHP', 'Laravel', 'ChatGPT Assistant API', 'MySQL', 'Bootstrap', 'JavaScript'
        ],
        link: '',
        imagePosition: 'left'
      },
      {
        id: 8,
        title: 'Nezihpark Bahçekent Website',
        description: 'A real estate project website built with PHP and Laravel, showcasing the Nezihpark Bahçekent housing project. Combines architectural elegance, rich social amenities, natural surroundings of the nearby Millet Park, and ease of transportation—all offering a privileged living experience.',
        image: nezihpark,
        technologies: [
          'PHP', 'Laravel', 'HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'SEO'
        ],
        link: 'https://www.nezihpark.com/',
        imagePosition: 'right'
      }
    ]
  }
});
</script>


<template>
  <div id="work" class="projects-section">
    <div class="section-header">
      <button class="work-button">Work</button>
      <h2 class="section-subtitle">Some of the noteworthy projects I have built:</h2>
    </div>

    <div class="projects-container">
      <div 
        v-for="project in props.projects" 
        :key="project.id"
        class="project-card"
      >
        <div class="project-content" :class="{ 'reverse': project.imagePosition === 'right' }">
          <div class="project-image-container">
            <img 
              :src="project.image" 
              :alt="project.title"
              class="project-image"
            />
          </div>
          
          <div class="project-details">
            <h3 class="project-title">{{ project.title }}</h3>
            <p v-html="project.description" class="project-description"></p>
            
            <div class="tech-tags">
              <span 
                v-for="(tech, index) in project.technologies" 
                :key="index"
                class="tech-tag"
              >
                {{ tech }}
              </span>
            </div>
            
            <button v-if="project.link" class="link-button" @click="openLink( project.link )">
              <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.projects-section {
  padding: 4rem 1rem;
  background-color: #0a0a0f;
  color: white;
  width: 100%;
}

.section-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;
}

.work-button {
  background-color: rgba(75, 85, 99, 0.8);
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 0.375rem;
  border: none;
  font-size: 0.875rem;
  margin-bottom: 1rem;
}

.section-subtitle {
  font-size: 1.5rem;
  text-align: center;
  font-weight: normal;
}

.projects-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.project-card {
  background-color: #1a1a25;
  border-radius: 0.5rem;
  overflow: hidden;
}

.project-content {
  display: flex;
  flex-direction: row;
}

.project-content.reverse {
  flex-direction: row-reverse;
}

.project-image-container {
  flex: 1;
  max-width: 50%;
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: fill;
  display: block;
}

.project-details {
  flex: 1;
  padding: 2rem;
  display: flex;
  flex-direction: column;
}

.project-title {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.project-description {
  color: #d1d5db;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.tech-tag {
  background-color: rgba(75, 85, 99, 0.6);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
}

.link-button {
  background-color: transparent;
  border: none;
  padding: 0;
  color: white;
  cursor: pointer;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
}

@media (max-width: 768px) {
  .project-content,
  .project-content.reverse {
    flex-direction: column;
  }
  
  .project-image-container {
    max-width: 100%;
  }
}
</style>