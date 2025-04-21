<template>
  <div class="min-h-screen bg-black flex items-center justify-center p-4">
    <!-- Animated grid background -->
    <div class="fixed inset-0 opacity-10">
      <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgZmlsbD0idXJsKCNwYXR0ZXJuKSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjwvc3ZnPg==')]"></div>
    </div>

    <!-- Login card -->
    <div class="relative w-full max-w-md z-10">
      <!-- Glowing border effect -->
      <div class="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl blur-lg opacity-30 animate-pulse"></div>
      
      <div class="relative bg-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden border border-cyan-500/20 shadow-2xl p-8">
        <!-- Header -->
        <div class="text-center mb-8">
          <div class="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-cyan-500/30">
            <svg class="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
            </svg>
          </div>
          <h1 class="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">SYSTEM ACCESS</h1>
          <p class="text-gray-400 mt-2 text-sm">Enter your credentials to continue</p>
        </div>

        <!-- Login form -->
        <form @submit.prevent="handleLogin" class="space-y-6">
          <div>
            <label class="block text-sm font-medium text-gray-400 mb-1">USER ID</label>
            <input 
              v-model="username"
              type="text"
              required
              class="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg focus:outline-none focus:ring-1 focus:ring-cyan-500/50 text-gray-200 placeholder-gray-500 transition-all duration-300"
              placeholder="Enter your ID"
            >
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-400 mb-1">SECURITY KEY</label>
            <input 
              v-model="password"
              type="password"
              required
              class="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg focus:outline-none focus:ring-1 focus:ring-cyan-500/50 text-gray-200 placeholder-gray-500 transition-all duration-300"
              placeholder="••••••••"
            >
          </div>

          <button 
            type="submit"
            class="w-full py-3 px-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 rounded-lg text-white font-medium tracking-wider transition-all duration-300 shadow-lg hover:shadow-cyan-500/20 relative overflow-hidden group"
          >
            <span class="relative z-10">AUTHENTICATE</span>
            <span class="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const username = ref('');
const password = ref('');

const handleLogin = () => {
  // Basic validation
  if (username.value.trim() && password.value.trim()) {
    // In real app: Verify credentials with backend/Firebase
    // For demo: Redirect immediately after input
    router.push('/home');
  }
};
</script>