<!-- src/views/HomePage.vue -->
<template>
  <div class="min-h-screen bg-black text-white p-8 fle">
    <div class="flex justify-between items-center mb-8">
      <h1 class="text-3xl font-bold">Pi Tracker</h1>
      <button @click="logout" class="bg-gray-700 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition">
        Logout
      </button>
    </div>
    <div class="w-full max-w-4xl mx-auto flex justify-center space-x-4 items-center mb-8 border-b border-gray-700 pb-4">
      <button @click="openExpenseModal" class="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition">
        Expense
      </button>
      <button @click="openIncomeModal" class="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition">
        Income
      </button>
    </div>

    <!-- Expense Modal -->
    <ExpenseModal :isOpen="isExpenseModalOpen" @close="closeExpenseModal" />

    <!-- Income Modal -->
    <IncomeModal :isOpen="isIncomeModalOpen" @close="closeIncomeModal" />
  </div>




</template>

<script>

import { useRouter } from 'vue-router';
import { ref } from 'vue';
const router = useRouter();
const username = ref(localStorage.getItem('username') || '');

const handleLogout = () => {
  // In real app: Clear auth token
  localStorage.removeItem('username');
  router.push('/');
};

import ExpenseModal from '../components/ExpenseModal.vue';
import IncomeModal from '../components/IncomeModal.vue';

export default {
  components: {
    ExpenseModal,
    IncomeModal,
  },
  data() {
    return {
      isExpenseModalOpen: false,
      isIncomeModalOpen: false,
    };
  },
  methods: {
    openExpenseModal() {
      this.isExpenseModalOpen = true;
    },
    closeExpenseModal() {
      this.isExpenseModalOpen = false;
    },
    openIncomeModal() {
      this.isIncomeModalOpen = true;
    },
    closeIncomeModal() {
      this.isIncomeModalOpen = false;
    },
    logout() {
      // Redirect to the Landing Page
      this.$router.push('/');
    },
  },
};
</script>