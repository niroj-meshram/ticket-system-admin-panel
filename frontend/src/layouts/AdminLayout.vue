<script setup>
import Header from '@/components/Header.vue';
import Sidebar from '@/components/Sidebar.vue';


</script>
<template>
    <div class="admin-wrapper flex min-h-screen">
        <Sidebar/>
        <div class="content flex-1 flex flex-col">
            <Header/>
            <main class="flex-1 p-6 overflow-y-auto">
                <RouterView></RouterView>
            </main>
            
        </div>
    </div>
</template>