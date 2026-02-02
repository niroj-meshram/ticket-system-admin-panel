import { defineStore } from "pinia";
import { ref } from "vue";
import {createTicket,getTickets,deleteTicket} from '@/services/ticket';


export const useTicketStore = defineStore('ticket', ()=> {
    const tickets = ref('');


    const create = async (data) => {
        return await createTicket(data);
    }

    const getAllTickets = async() =>{
        const res = await getTickets();
        tickets.value = await res.data.data;
    }
    const deleteSingleTicket = async(id) => {
        try {
           const result = await deleteTicket(id);
            if(result.data.status==="success"){
                tickets.value = tickets.value.filter(ticket => ticket.id !=id )
            }
            return result.data;
        } catch (error) {
            
        }

    }

    return {
        tickets,create, getAllTickets,deleteSingleTicket
    }
})