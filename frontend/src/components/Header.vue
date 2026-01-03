<script setup>

</script>
<template>
    <header class="bg-white shadow-sm border-b">
        <div class="flex justify-between items-center px-6 py-4">
            <div class="flex items-center">
                <button id="sidebar-toggle" class="text-gray-500 focus:outline-none lg:hidden">
                    <i class="fas fa-bars text-xl"></i>
                </button>
                <h2 id="page-title" class="text-2xl font-semibold text-gray-800 ml-4">Dashboard</h2>
            </div>
            
            <div class="flex items-center space-x-4">
                
                <div class="relative">
                    <button id="user-menu-button" class="flex items-center text-gray-700 focus:outline-none">
                        <img class="h-8 w-8 rounded-full object-cover" src="https://ui-avatars.com/api/?name=Admin+User&background=4F46E5&color=fff" alt="Admin User">
                        <span class="ml-2 hidden md:block">Admin User</span>
                        <i class="fas fa-chevron-down ml-1 text-sm"></i>
                    </button>
                </div>
            </div>
        </div>
    </header>
</template>