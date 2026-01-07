import { defineStore } from "pinia";
import { loginApi, logoutApi, meApi,registerApi } from "@/services/auth";
import { ref, computed } from "vue";

export const useAuthStore = defineStore('auth', () => {
    const user = ref(JSON.parse(localStorage.getItem('user')))
    const token = ref(localStorage.getItem('token'))
    const loading = ref(false);
    const error = ref(null)

    const isUserAuthenticated = computed( () => !! token.value)

    const login = async( credentials ) => {
        loading.value = true;
        error.value = null;
        try {
            const res = await loginApi(credentials);
            token.value = res.data.data.token;
            user.value = res.data.data.user;

            localStorage.setItem('token', token.value);
            localStorage.setItem('user', JSON.stringify(user.value));
            console.log("colll",res)
            return res;
        } catch (err) {
            error.value = err.response?.data?.message || 'Login failed'
            throw err 
        } finally {
            loading.value = false
        }  

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
            return await registerApi(data);
        } catch (error) {
           console.log("Error occurred", error) 
           throw error;
        }
    }

    const logout = async() =>{
        try {
           const res = await logoutApi();
           token.value = null;
           user.value = null;

           localStorage.setItem('token', null);
           localStorage.setItem('user', null);
           console.log("Token and uswr set to null",isUserAuthenticated.value)
        } catch (error) {
            throw error;
        }
    }




    return {
        token,
        user,
        login,
        fetchUser,
        create,
        logout,
        loading,
        isUserAuthenticated
    }
})