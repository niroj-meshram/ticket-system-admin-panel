import { defineStore } from "pinia";
import { ref } from "vue";
import {createTicket,getTickets} from '@/services/ticket';


export const useTicketStore = defineStore('ticket', ()=> {
    const tickets = ref('');


    const create = async (data) => {
        return await createTicket(data);
    }

    const getAllTickets = async() =>{
        return await getTickets();
    }

    const getTicket = async() => {

    }

    return {
        tickets,create, getTicket, getAllTickets
    }
})