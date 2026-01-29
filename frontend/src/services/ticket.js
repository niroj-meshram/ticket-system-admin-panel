import api from './api'

export const createTicket = ( data) => api.post('/create-ticket', data)
export const getTickets   = ()      => api.get('/tickets')