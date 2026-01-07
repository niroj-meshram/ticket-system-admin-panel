import api from './api';

api.interceptors.request.use( config => {
    const token = localStorage.getItem('token');
    console.log(token)
    if(token){
        config.headers.Authorization = `Bearer ${token}`;
    }else{
        alert("empty token");
    }

    return config;
})