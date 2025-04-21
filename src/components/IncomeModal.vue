<!-- src/components/IncomeModal.vue -->
<template>
  <teleport to="body">
    <div v-if="isOpen" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center ">
      <div class=" p-10 rounded-lg">
        <h2 class="text-xl font-bold mb-4 text-white">Add Income</h2>

        
    <form @submit.prevent="submitExpense" class=" space-y-4">

        <!-- Subject Input -->
          <input
            type="text"
            id="subject"
            class="w-full px-4 py-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all"
            placeholder="Enter subject"
            required
          />
        
        <!-- Amount Input -->
       
          <input
            type="number"
            id="amount"
            class="w-full px-4 py-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all"
            placeholder="Enter amount"
            required
          />
    

        <!-- Date Input -->
        <div>
        
          <input
            type="date"
            id="date"
            class="w-full px-4 py-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all"
            required
          />
        </div>

        <!-- File Upload -->
        <div>
          
          <div class="flex items-center justify-center w-full">
            <label
              for="dropzone-file"
              class="flex flex-col items-center justify-center w-full h-32 bg-white/10 backdrop-blur-sm rounded-lg border-2 border-dashed border-white/20 cursor-pointer hover:bg-white/20 transition-all"
            >
              <div class="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  class="w-8 h-8 mb-4 text-white/50"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p class="text-sm text-white/50">Drag & drop or click to upload receipt </p>
              </div>
              <input id="dropzone-file" type="file" class="hidden" />
            </label>
          </div>
        </div>

        <!-- Comment Textarea -->
        <div>
           <textarea
            id="comment"
            rows="4"
            class="w-full px-4 py-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all"
            placeholder="Leave a comment..."
          ></textarea>
        </div>

        <!-- Submit Button -->
        <button
          type="submit"
          class="w-full px-4 py-3 bg-gradient-to-r from-gray-800 to-blue-500 text-white font-semibold rounded-lg hover:from-blue-500 hover:to-indigo-600 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 transition-all"
        >
          Save
        </button>
      </form>

   <button @click="closeModal" class="mt-4 text-gray-400 hover:text-gray-200 transition rounded-lg bg-gray-800 p-2">
          Close
    </button>

      </div>
    </div>
  </teleport>
</template>

<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      amount: null,
      description: '',
    };
  },
  methods: {
    closeModal() {
      this.$emit('close');
    },
    submitIncome() {
      alert(`Income Added: $${this.amount} - ${this.description}`);
      this.closeModal();
    },
  },
};
</script>