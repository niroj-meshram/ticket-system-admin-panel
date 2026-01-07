<script setup>
import { useForm,useField } from 'vee-validate';
import * as yup from 'yup';
import { useAuthStore } from '@/stores/auth';
import { useRouter } from 'vue-router';
import { useToast } from 'vue-toastification'


const toast = useToast()
const auth = useAuthStore();
const router = useRouter();


// schema
const schema = yup.object({
    firstName : yup.string().required("first name is required"),
    lastName : yup.string().required("last name is required"),
    email : yup.string().required().email(),
    password : yup.string().required().min(6,"Min 6 characters"),
    password_confirmation : yup.string().required("confirm password is required").oneOf([yup.ref('password')], 'Confirm password must match password')

})

//setup
const { handleSubmit,setErrors } = useForm({
    validationSchema :schema
})

//error message
const { value : email, errorMessage: emailError} = useField('email')
const { value : password, errorMessage: passwordError} = useField('password')
const { value : firstName, errorMessage: firstNameError} = useField('firstName')
const { value : lastName, errorMessage: lastNameError} = useField('lastName')
const { value : password_confirmation, errorMessage: password_confirmationError} = useField('password_confirmation')

const onSubmit = handleSubmit( async (values) => {
    try {
       const res = await auth.create(values);
       console.log(res)
       router.push('/login');

    } catch (error) {
        if (error.response?.status === 422) {
          setErrors(error.response.data.errors)
        }else{
            toast.error('Something went wrong. Please try again.')
        }
    }
})
</script>
<template>
    <!-- Register Page -->
    <div id="register-page" class="min-h-screen flex items-center justify-center p-4">
        <div class="w-full max-w-md">
            <!-- Register Card -->
            <div class="bg-white rounded-2xl card-shadow overflow-hidden">
                <!-- Header -->
                <div class="auth-bg px-6 py-8 text-center">
                    <div class="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full backdrop-blur-sm">
                       <font-awesome-icon icon="user-plus"  class="p-3 text-white text-2xl"/>
                    </div>
                    <h1 class="mt-4 text-3xl font-bold text-white">Create Account</h1>
                    <p class="mt-2 text-white/90">Join our admin platform</p>
                </div>
                
                <!-- Form -->
                <div class="px-8 py-8">
                    <form @submit.prevent="onSubmit" id="register-form" class="space-y-6">
                        <!-- Name -->
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">
                                    <i class="fas fa-user mr-2 text-gray-400"></i>
                                    First Name
                                </label>
                                <input 
                                    type="text" 
                                    v-model ='firstName' 
                                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                                    placeholder="John"
                                >
                                <p class="text-red-500 text-sm">{{ firstNameError }}</p>

                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">
                                    <i class="fas fa-user mr-2 text-gray-400"></i>
                                    Last Name
                                </label>
                                <input 
                                    type="text" 
                                    v-model ='lastName'  
                                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                                    placeholder="Doe"
                                >
                                <p class="text-red-500 text-sm">{{ lastNameError }}</p>
                            </div>
                        </div>
                        
                        <!-- Email -->
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">
                                <i class="fas fa-envelope mr-2 text-gray-400"></i>
                                Email Address
                            </label>
                            <input 
                                type="email" 
                                v-model="email" 
                                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                                placeholder="you@example.com"
                            >
                            <p class="text-red-500 text-sm">{{ emailError }}</p>
                        </div>
                        
                        <!-- Password -->
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">
                                <i class="fas fa-key mr-2 text-gray-400"></i>
                                Password
                            </label>
                            <div class="relative">
                                <input 
                                    type="password" 
                                    id="register-password"
                                    v-model="password" 
                                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition pr-12"
                                    placeholder="••••••••"
                                >
                                <p class="text-red-500 text-sm">{{ passwordError }}</p>
                                <button 
                                    type="button" 
                                    class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"   
                                >
                                    <i class="fas fa-eye"></i>
                                </button>
                            </div>
                        </div>
                        
                        <!-- Confirm Password -->
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">
                                <i class="fas fa-key mr-2 text-gray-400"></i>
                                Confirm Password
                            </label>
                            <input 
                                type="password" 
                                id="confirm-password"
                                v-model="password_confirmation" 
                                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                                placeholder="••••••••"
                            >
                            <p class="text-red-500 text-sm">{{ password_confirmationError }}</p>
                        </div>
                        <!-- Submit Button -->
                        <button 
                            type="submit" 
                            class="w-full auth-bg text-white py-3 rounded-lg font-medium hover:opacity-90 transition active:scale-[0.98]"
                        >
                            <i class="fas fa-user-plus mr-2"></i>
                            Create Account
                        </button>
                    </form>
                    <!-- Login Link -->
                    <div class="mt-8 text-center">
                        <p class="text-gray-600">
                            Already have an account?
                            <RouterLink to="/login" class="text-blue-600 hover:text-blue-800 font-medium ml-1">
                                Sign in
                            </RouterLink>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>