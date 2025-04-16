<script setup>
import { ref } from 'vue';
import { Mail, Phone, Copy, Github, Twitter, Facebook, Linkedin } from 'lucide-vue-next';

const props = defineProps({
  email: {
    type: String,
    default: 'kharzom.mohammed@gmail.com'
  },
  phone: {
    type: String,
    default: '+601128624961'
  },
  platforms: {
    type: Array,
    default: () => ['github', 'linkedin', 'facebook',]
  }
});

const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text);
};

const platformIcons = {
  github: Github,
  linkedin: Linkedin,
  facebook: Facebook,
};

const getPlatformIcon = (platform) => {
  return platformIcons[platform] || null;
};

const getPlatformLink = (platform) => {
  const links = {
    github: 'https://github.com/htgdev',
    linkedin: 'https://www.linkedin.com/in/mohammed-kharzom-b3115b2a3/',
    facebook: 'https://www.facebook.com/mKharzom',
  };
  return links[platform] || '#';
};

</script>



<template>
  <div id="contact" class="contact-section">
    <button class="contact-button">
      Get in touch
    </button>

    <p class="contact-text">
      What's next? Feel free to reach out to me if you're looking for 
      a developer, have a query, or simply want to connect.
    </p>

    <div class="contact-info">
      <Mail class="icon" />
      <span class="contact-value">{{ props.email }}</span>
      <button @click="copyToClipboard(props.email)" class="copy-button">
        <Copy class="copy-icon" />
      </button>
    </div>

    <div class="contact-info">
      <Phone class="icon" />
      <span class="contact-value">{{ props.phone }}</span>
      <button @click="copyToClipboard(props.phone)" class="copy-button">
        <Copy class="copy-icon" />
      </button>
    </div>

    <p class="platforms-text">You may also find me on these platforms!</p>
    
    <div class="platforms-container">
      <a 
        v-for="platform in props.platforms" 
        :key="platform"
        :href="getPlatformLink(platform)"
        class="platform-link"
      >
        <component :is="getPlatformIcon(platform)" class="platform-icon" v-if="getPlatformIcon(platform)" />
        <div v-else-if="platform === 'hashnode'" class="hashnode-icon">
          <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path d="M22.351 8.019l-6.37-6.37a5.63 5.63 0 0 0-7.962 0l-6.37 6.37a5.63 5.63 0 0 0 0 7.962l6.37 6.37a5.63 5.63 0 0 0 7.962 0l6.37-6.37a5.63 5.63 0 0 0 0-7.962zM12 15.953a3.953 3.953 0 1 1 0-7.906 3.953 3.953 0 0 1 0 7.906z" />
          </svg>
        </div>
      </a>
    </div>
  </div>
</template>

<style scoped>
.contact-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 1rem;
  background-color: #0a0a0f;
  color: white;
  width: 100%;
}

.contact-button {
  background-color: rgba(75, 85, 99, 0.8);
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 0.375rem;
  border: none;
  cursor: pointer;
  margin-bottom: 1.5rem;
  font-size: 1rem;
  transition: background-color 0.3s;
}

.contact-button:hover {
  background-color: rgba(75, 85, 99, 1);
}

.contact-text {
  font-size: 1.25rem;
  text-align: center;
  max-width: 36rem;
  margin-bottom: 2.5rem;
  line-height: 1.6;
}

.contact-info {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.icon {
  width: 1.5rem;
  height: 1.5rem;
}

.contact-value {
  font-size: 1.5rem;
}

.copy-button {
  padding: 0.25rem;
  background: transparent;
  border: none;
  cursor: pointer;
  color: white;
  opacity: 0.7;
  transition: opacity 0.3s;
}

.copy-button:hover {
  opacity: 1;
}

.copy-icon {
  width: 1.25rem;
  height: 1.25rem;
}

.platforms-text {
  margin-bottom: 1rem;
  font-size: 1rem;
}

.platforms-container {
  display: flex;
  gap: 1.5rem;
}

.platform-link {
  color: white;
  opacity: 0.8;
  transition: opacity 0.3s;
}

.platform-link:hover {
  opacity: 1;
}

.platform-icon, .hashnode-icon {
  width: 1.5rem;
  height: 1.5rem;
}

.hashnode-icon {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>