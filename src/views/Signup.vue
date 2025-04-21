<template>
  <div class="min-h-screen bg-black flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
        Create your account
      </h2>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-gray-800 py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form class="space-y-6" @submit.prevent="handleSubmit">
          <!-- Name Field -->
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <div class="mt-1">
              <input 
                id="name" 
                name="name" 
                type="text" 
                v-model="form.name"
                required 
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
          </div>

          <!-- Username Field -->
          <div>
            <label for="username" class="block text-sm font-medium text-gray-700">
              Username
            </label>
            <div class="mt-1">
              <input 
                id="username" 
                name="username" 
                type="text" 
                v-model="form.username"
                required 
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
          </div>

          <!-- Email Field -->
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <div class="mt-1">
              <input 
                id="email" 
                name="email" 
                type="email" 
                v-model="form.email"
                autocomplete="email" 
                required 
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
          </div>

          <!-- Phone Number Field -->
          <div>
            <label for="phone" class="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <div class="mt-1">
              <input 
                id="phone" 
                name="phone" 
                type="tel" 
                v-model="form.phone"
                required 
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
          </div>

          <!-- Create Password Field -->
          <div>
            <label for="password" class="block text-sm font-medium text-gray-700">
              Create Password
            </label>
            <div class="mt-1">
              <input 
                id="password" 
                name="password" 
                type="password" 
                v-model="form.password"
                autocomplete="new-password" 
                required 
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
          </div>

          <!-- Confirm Password Field -->
          <div>
            <label for="confirmPassword" class="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <div class="mt-1">
              <input 
                id="confirmPassword" 
                name="confirmPassword" 
                type="password" 
                v-model="form.confirmPassword"
                autocomplete="new-password" 
                required 
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
          </div>

          <!-- Terms and Conditions -->
          <div class="flex items-center">
            <input 
              id="terms" 
              name="terms" 
              type="checkbox" 
              v-model="form.acceptedTerms"
              class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label for="terms" class="ml-2 block text-sm text-gray-900">
              I agree to the <a href="#" class="text-blue-600 hover:text-blue-500">Terms</a> and <a href="#" class="text-blue-600 hover:text-blue-500">Privacy Policy</a>
            </label>
          </div>

          <!-- Submit Button -->
          <div>
            <button 
              type="submit" 
              class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Sign up
            </button>
          </div>
        </form>

        <div class="mt-6">
          <div class="relative">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-gray-300"></div>
            </div>
            <div class="relative flex justify-center text-sm">
              <span class="px-2 bg-white text-gray-500">
                Already have an account?
              </span>
            </div>
          </div>

          <div class="mt-6">
            <RouterLink 
              to="/login" 
              class="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Sign in
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { RouterLink } from 'vue-router';

const router = useRouter();

const form = ref({
  name: '',
  username: '',
  email: '',
  phone: '',
  password: '',
  confirmPassword: '',
  acceptedTerms: false
});

const handleSubmit = async () => {
  if (form.value.password !== form.value.confirmPassword) {
    alert('Passwords do not match!');
    return;
  }

  try {
    const response = await fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form.value),
    });

    const result = await response.json();
    console.log('Server response:', result);

    if (response.ok) {
      router.push('/login'); // Redirect to login page on success
    } else {
      alert(result.error || 'Something went wrong');
    }
  } catch (error) {
    console.error('Submission error:', error);
    alert('Failed to connect to server');
  }
};

</script>

<style scoped>
/* Simple focus styles for better accessibility */
input:focus, button:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}
</style>