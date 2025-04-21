<template>
  <div class="min-h-screen flex items-center justify-center p-6 font-sans">
    <!-- Glassmorphism Card -->
    <div class="glassmorphism-container bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 max-w-md w-full text-center">
      <!-- App Logo or Title -->
      <h1 class="text-5xl font-bold text-white mb-4 glow-text font-poppins">
        <span class="text-[#6EE7B7]">$</span>Money Manager
      </h1>

      <!-- Tagline -->
      <p class="text-lg text-white/80 mb-8 font-inter">
        Take control of your money. Track, save, and grow your finances.
      </p>

      <!-- Financial Chart Icon -->
      <div class="flex justify-center mb-8 animate-pulse">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-16 h-16 text-[#6EE7B7]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M12 2v20" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      </div>

      <!-- Get Started Button -->
      <button @click="login" class="w-full px-6 py-3 bg-gradient-to-r from-[#6EE7B7] to-[#3B82F6] text-white font-semibold rounded-lg hover:from-[#3B82F6] hover:to-[#6EE7B7] transition-all duration-300 shadow-lg font-poppins">
        Start Managing
      </button>

      <!-- Additional Info -->
      <p class="text-sm text-white/60 mt-6 font-inter">
        New to Money Manager? 
        <RouterLink to="/signup" class="text-[#6EE7B7] hover:underline">Sign up now</RouterLink>
      </p>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { RouterLink } from 'vue-router';

const router = useRouter();

const login = () => {
  // Simulate a login action
  localStorage.setItem("isAuthenticated", "true");
  router.push("/LoginPage"); // Redirect to the homepage
};
</script>

<style scoped>
/* Glowing Text */
.glow-text {
  text-shadow: 0 0 10px rgba(110, 231, 183, 0.8), 0 0 20px rgba(59, 130, 246, 0.6),
    0 0 30px rgba(59, 130, 246, 0.4);
}

/* Glassmorphism Effect */
.glassmorphism-container {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
}
</style>