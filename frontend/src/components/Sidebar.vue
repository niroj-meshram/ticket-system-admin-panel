<script setup>
    import { RouterLink } from 'vue-router';
    import { useRoute } from 'vue-router';
</script>
<template>
    <aside id="sidebar" class="w-64 bg-dark text-white transform transition-all duration-300">
            <div class="p-6">
                <h1 class="text-2xl font-bold text-center">
                    <font-awesome-icon icon="cube" class="px-1"/> Admin<span class="text-primary">Pro</span>
                </h1>
            </div>
            
            <nav class="mt-6">
                <ul>
                    <li class="mb-2">
                        <RouterLink to="/" id="dashboard-link" exact-active-class="bg-primary"
                         class="flex items-center p-4 text-white">
                           <font-awesome-icon icon="tachometer-alt" class="px-2" />
                            Dashboard
                        </RouterLink>
                    </li>
                    <li class="mb-2">
                        <RouterLink to="/ticket" id="users-link" class="flex items-center p-4  transition-colors" 
                       >
                            <font-awesome-icon icon="ticket" class="px-2"/>
                            Ticket Management
                        </RouterLink>
                    </li>
                   
                </ul>
            </nav>
            
            <div class="absolute bottom-0 w-64 p-6 border-t border-gray-700">
                <div class="flex items-center">
                    <img class="h-10 w-10 rounded-full object-cover" src="https://ui-avatars.com/api/?name=Admin+User&background=4F46E5&color=fff" alt="Admin User">
                    <div class="ml-3">
                        <p class="text-sm font-medium">Admin User</p>
                        <p class="text-xs text-gray-400">Administrator</p>
                    </div>
                </div>
            </div>
        </aside>
</template>