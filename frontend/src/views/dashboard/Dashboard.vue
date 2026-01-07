<script setup>


</script>
<template>
    <div id="dashboard-page" class="page-content">
            <!-- Stats Cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div class="bg-white p-6 rounded-lg shadow-sm border">
                <div class="flex items-center">
                    <div class="p-3 rounded-full bg-blue-100 text-blue-600">
                        <i class="fas fa-users text-xl"></i>
                    </div>
                    <div class="ml-4">
                        <h3 class="text-2xl font-bold">1,254</h3>
                        <p class="text-gray-500">Total Users</p>
                    </div>
                </div>
                <div class="mt-4">
                    <span class="text-green-500 text-sm"><i class="fas fa-arrow-up"></i> 12%</span>
                    <span class="text-gray-500 text-sm ml-2">Since last month</span>
                </div>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-sm border">
                <div class="flex items-center">
                    <div class="p-3 rounded-full bg-green-100 text-green-600">
                        <i class="fas fa-shopping-cart text-xl"></i>
                    </div>
                    <div class="ml-4">
                        <h3 class="text-2xl font-bold">342</h3>
                        <p class="text-gray-500">Total Orders</p>
                    </div>
                </div>
                <div class="mt-4">
                    <span class="text-green-500 text-sm"><i class="fas fa-arrow-up"></i> 8%</span>
                    <span class="text-gray-500 text-sm ml-2">Since last month</span>
                </div>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-sm border">
                <div class="flex items-center">
                    <div class="p-3 rounded-full bg-yellow-100 text-yellow-600">
                        <i class="fas fa-chart-line text-xl"></i>
                    </div>
                    <div class="ml-4">
                        <h3 class="text-2xl font-bold">$8,420</h3>
                        <p class="text-gray-500">Total Revenue</p>
                    </div>
                </div>
                <div class="mt-4">
                    <span class="text-red-500 text-sm"><i class="fas fa-arrow-down"></i> 3%</span>
                    <span class="text-gray-500 text-sm ml-2">Since last month</span>
                </div>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-sm border">
                <div class="flex items-center">
                    <div class="p-3 rounded-full bg-purple-100 text-purple-600">
                        <i class="fas fa-eye text-xl"></i>
                    </div>
                    <div class="ml-4">
                        <h3 class="text-2xl font-bold">12,543</h3>
                        <p class="text-gray-500">Total Visits</p>
                    </div>
                </div>
                <div class="mt-4">
                    <span class="text-green-500 text-sm"><i class="fas fa-arrow-up"></i> 21%</span>
                    <span class="text-gray-500 text-sm ml-2">Since last month</span>
                </div>
            </div>
        </div>
            
            <!-- Charts and Activity -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <!-- Recent Activity -->
            <div class="bg-white p-6 rounded-lg shadow-sm border">
                <h3 class="text-lg font-semibold mb-4">Recent Activity</h3>
                <ul class="space-y-4">
                    <li class="flex items-start">
                        <div class="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                            <i class="fas fa-user-plus text-blue-600"></i>
                        </div>
                        <div>
                            <p class="font-medium">New user registered</p>
                            <p class="text-gray-500 text-sm">John Doe joined the platform</p>
                            <p class="text-gray-400 text-xs">2 hours ago</p>
                        </div>
                    </li>
                    <li class="flex items-start">
                        <div class="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                            <i class="fas fa-shopping-cart text-green-600"></i>
                        </div>
                        <div>
                            <p class="font-medium">New order placed</p>
                            <p class="text-gray-500 text-sm">Order #ORD-7890 has been placed</p>
                            <p class="text-gray-400 text-xs">4 hours ago</p>
                        </div>
                    </li>
                    <li class="flex items-start">
                        <div class="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                            <i class="fas fa-chart-line text-purple-600"></i>
                        </div>
                        <div>
                            <p class="font-medium">Monthly report generated</p>
                            <p class="text-gray-500 text-sm">August 2023 revenue report is ready</p>
                            <p class="text-gray-400 text-xs">1 day ago</p>
                        </div>
                    </li>
                </ul>
            </div>
            
            <!-- Quick Stats -->
            <div class="bg-white p-6 rounded-lg shadow-sm border">
                <h3 class="text-lg font-semibold mb-4">System Status</h3>
                <div class="space-y-4">
                    <div>
                        <div class="flex justify-between mb-1">
                            <span class="text-gray-700">Server Load</span>
                            <span class="text-gray-700">65%</span>
                        </div>
                        <div class="w-full bg-gray-200 rounded-full h-2">
                            <div class="bg-blue-600 h-2 rounded-full" style="width: 65%"></div>
                        </div>
                    </div>
                    <div>
                        <div class="flex justify-between mb-1">
                            <span class="text-gray-700">Database Usage</span>
                            <span class="text-gray-700">42%</span>
                        </div>
                        <div class="w-full bg-gray-200 rounded-full h-2">
                            <div class="bg-green-600 h-2 rounded-full" style="width: 42%"></div>
                        </div>
                    </div>
                    <div>
                        <div class="flex justify-between mb-1">
                            <span class="text-gray-700">Storage</span>
                            <span class="text-gray-700">78%</span>
                        </div>
                        <div class="w-full bg-gray-200 rounded-full h-2">
                            <div class="bg-yellow-600 h-2 rounded-full" style="width: 78%"></div>
                        </div>
                    </div>
                </div>
                
                <div class="mt-6 pt-6 border-t">
                    <h4 class="font-medium mb-2">Quick Actions</h4>
                    <div class="flex flex-wrap gap-2">
                        <button class="bg-primary text-white px-3 py-1 rounded text-sm">Add User</button>
                        <button class="bg-gray-200 text-gray-800 px-3 py-1 rounded text-sm">Generate Report</button>
                        <button class="bg-gray-200 text-gray-800 px-3 py-1 rounded text-sm">Send Notification</button>
                        <button class="bg-gray-200 text-gray-800 px-3 py-1 rounded text-sm">Backup Database</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>