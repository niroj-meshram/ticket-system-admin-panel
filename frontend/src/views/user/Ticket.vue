<script setup>
import {onMounted} from 'vue';
import {useTicketStore} from '@/stores/ticket'
import {ref} from 'vue'
import { useToast } from 'vue-toastification';

const ticketStore = useTicketStore();
const toast = useToast();
onMounted ( async ()=> {
    try {
     await ticketStore.getAllTickets(); 
    
    } catch (error) {
        console.log(error)
    }
})

const handleDelete = async(id) => {
    const res = await ticketStore.deleteSingleTicket(id)
    console.log("resss",res)
    if(res.status==="success"){
        console.log("asdasdssss")
     toast.success("Ticket deleted!")
    }
    
}

</script>
<template>
    <div id="users-page" class="page-content ">
        <div class="flex justify-between items-center mb-6">
            <h3 class="text-2xl font-bold text-gray-800">User Management</h3>
            <RouterLink to="/ticket/create" id="add-user-btn" class="bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                <font-awesome-icon icon="plus" class="mr-2" /> Create New Ticket
            </RouterLink>
        </div>
        
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
  <div class="overflow-x-auto">
    <table class="min-w-full divide-y divide-gray-200">
      <thead class="bg-gray-100">
        <tr>
          <th class="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
            #
          </th>
          <th class="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
            Title
          </th>
          <th class="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
            Description
          </th>
          <th class="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase">
            Image
          </th>
          <th class="px-6 py-4 text-right text-xs font-semibold text-gray-600 uppercase">
            Actions
          </th>
        </tr>
      </thead>

      <tbody class="divide-y divide-gray-100">
        <tr
          v-for="ticket in ticketStore.tickets"
          :key="ticket.id"
          class="hover:bg-gray-50 transition"
        >
          <td class="px-6 py-4 text-sm text-gray-600">
            {{ ticket.id }}
          </td>

          <td class="px-6 py-4">
            <p class="text-sm font-medium text-gray-900">
              {{ ticket.title }}
            </p>
          </td>

          <td class="px-6 py-4 text-sm text-gray-600 max-w-xs truncate">
            {{ ticket.description }}
          </td>

          <td class="px-6 py-4">
            <img
              v-if="ticket.image"
              :src="ticket.image"
              class="h-10 w-10 rounded object-cover border"
            />
            <span v-else class="text-gray-400 text-sm">—</span>
          </td>

          <td class="px-6 py-4 text-right space-x-2">
            <button
              class="inline-flex items-center px-3 py-1 text-xs font-medium text-blue-700 bg-blue-100 rounded-lg hover:bg-blue-200 transition"
            >
              View
            </button>
            <button @click="handleDelete(ticket.id)"
              class="inline-flex items-center px-3 py-1 text-xs font-medium text-red-700 bg-red-100 rounded-lg hover:bg-red-200 transition"
            >
              Delete
            </button>
          </td>
        </tr>

        <!-- Empty State -->
        <tr v-if="!ticketStore.tickets.length">
          <td colspan="5" class="px-6 py-10 text-center text-gray-500">
            No tickets found.
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
</div>
</template>