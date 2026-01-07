<script setup>


</script>
<template>
    <div id="users-page" class="page-content ">
        <div class="flex justify-between items-center mb-6">
            <h3 class="text-2xl font-bold text-gray-800">User Management</h3>
            <RouterLink to="/ticket/create" id="add-user-btn" class="bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                <font-awesome-icon icon="plus" class="mr-2" /> Create New Ticket
            </RouterLink>
        </div>
        
        <!-- User Table -->
        <div class="bg-white rounded-lg shadow-sm border overflow-hidden">
            <div class="overflow-x-auto">
                <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-gray-50">
                        <tr>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody id="user-table-body" class="bg-white divide-y divide-gray-200">
                        <!-- Users will be populated here by JavaScript -->
                    </tbody>
                </table>
            </div>
        </div>
        
        
    </div>
</template>