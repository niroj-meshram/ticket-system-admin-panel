<script setup>
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'

const auth = useAuthStore()
const router = useRouter()

const showMenu = ref(false)

const logout = async() => {
  try {
    const res= await auth.logout()
    console.log("Logout done")
    router.push('/login')
  } catch (error) {
    console.log(error)
  }
}
</script>

<template>
  <header class="bg-white shadow-sm border-b">
    <div class="flex justify-between items-center px-6 py-4">
      <div class="flex items-center">
        <button class="text-gray-500 focus:outline-none lg:hidden">
          <i class="fas fa-bars text-xl"></i>
        </button>
        <h2 class="text-2xl font-semibold text-gray-800 ml-4">
          Dashboard
        </h2>
      </div>

      <div class="flex items-center space-x-4 relative">
        <button
          @click="showMenu = !showMenu"
          class="flex items-center text-gray-700 focus:outline-none"
        >
          <img
            class="h-8 w-8 rounded-full object-cover"
            src="https://ui-avatars.com/api/?name=Admin+User&background=4F46E5&color=fff"
            alt="Admin User"
          />
          <span class="ml-2 hidden md:block">
            {{ auth.user?.name || 'Admin User' }}
          </span>
          <i class="fas fa-chevron-down ml-2 text-sm"></i>
        </button>

        <!-- Dropdown -->
        <div
          v-if="showMenu"
          class="absolute right-0 top-12 w-40 bg-white border rounded-lg shadow-md z-50"
        >
          <button
            @click="logout"
            class="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
          >
            <i class="fas fa-sign-out-alt mr-2"></i>
            Logout
          </button>
        </div>
      </div>
    </div>
  </header>
</template>
