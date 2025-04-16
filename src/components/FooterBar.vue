<script setup>
import { ref } from 'vue';

const props = defineProps({
  year: {
    type: String,
    default: '2024'
  },
  designedBy: {
    type: String,
    default: 'Mohammed Kharzom'
  },
  codedBy: {
    type: String,
    default: 'Sagar Shah'
  }
});
</script>

<template>
  <footer class="footer">
    <div class="footer-content">
      <span class="copyright">© {{ props.year }}</span>
      <span class="separator">|</span>
      <a>Designed</a>
      <span class="and-text">and</span>
      <a>coded</a>
      <span class="by-text">by</span>
      <span class="author">{{ props.designedBy }}</span>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #0a0a0f;
  color: white;
  padding: 1.5rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.footer-content {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: #9ca3af;
}

.copyright {
  display: flex;
  align-items: center;
}

.separator {
  margin: 0 0.25rem;
}

.footer-link {
  color: #d1d5db;
  text-decoration: underline;
  transition: color 0.2s;
}

.footer-link:hover {
  color: white;
}

.and-text, .with-text, .by-text {
  color: #9ca3af;
}

.heart-icon {
  font-size: 0.875rem;
  display: inline-flex;
  align-items: center;
}

.author {
  color: #d1d5db;
}

@media (max-width: 640px) {
  .footer-content {
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
  }
}
</style>