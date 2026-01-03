import { defineStore } from "pinia";
import { loginApi, logoutApi, meApi,registerApi } from "@/services/auth";
import { ref, computed } from "vue";

export const useAuthStore = defineStore('auth', () => {
    const user = ref(JSON.parse(localStorage.getItem('user')))
    const token = ref(localStorage.getItem('token'))
    const loading = ref(false);

    const isUserAuthenticated = computed( ()=> !! token.value)

    const login = async( credentials ) => {
        const res = await loginApi(credentials);
        token.value = res.data.data.token;
        user.value = res.data.data.user;

        localStorage.setItem('token', token.value);
        localStorage.setItem('user', JSON.stringify(user.value));

    }

    const fetchUser = async () => {
        if(!token.value) return;

        try {
            const res = await meApi();
            console.log("user", res.data)
        } catch (error) {
            console.log("error occurred",error)
        }
    }

    const create = async(data) => {

        try {
            const res = await registerApi(data);
            console.log(res.data)
        } catch (error) {
           console.log("Error occurred", error) 
        }
    
    }


    return {
        token,
        user,
        login,
        fetchUser,
        create,
        loading,
        isUserAuthenticated
    }
})