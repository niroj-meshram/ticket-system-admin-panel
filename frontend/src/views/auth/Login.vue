<script setup>
  import { useForm,useField } from 'vee-validate';  
  import * as yup from 'yup';
  import { useAuthStore } from '@/stores/auth';
  import { useRouter } from 'vue-router';
  import { useToast } from 'vue-toastification';

  const router = useRouter();
  const auth = useAuthStore();
  const toast = useToast();

  //Validation schema
  const schema = yup.object({
    email : yup.string().email().required(),
    password : yup.string().required().min(6,"Min 6 chars")
  })

  // setup form
  const {handleSubmit, setErrors} = useForm({
    validationSchema : schema
  })

  //fields
  const { value: email , errorMessage:emailError } = useField('email')
  const { value : password, errorMessage : passwordError} = useField('password');

  const onSubmit = handleSubmit(async (value) => {
    try {
        await auth.login(value)
        router.push('/')
    } catch (error) {
        if (error?.response?.status === 422) {
            setErrors(error.response.data.errors)
        }else{
            toast.error('Something went wrong, Please try again');
        }
    }
})
</script>

<template>
     <!-- Login Page -->
    <div id="login-page" class="min-h-screen flex items-center justify-center p-4">
        <div class="w-full max-w-md">
            <!-- Login Card -->
            <div class="bg-white rounded-2xl card-shadow overflow-hidden">
                <!-- Header -->
                <div class="auth-bg px-6 py-8 text-center">
                    <div class="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full backdrop-blur-sm">
                        <i class="fas fa-lock text-white text-2xl"></i>
                    </div>
                    <h1 class="mt-4 text-3xl font-bold text-white">Welcome Back</h1>
                    <p class="mt-2 text-white/90">Sign in to your admin account</p>
                </div>
                
                <!-- Form -->
                <div class="px-8 py-8">
                    <form @submit.prevent="onSubmit" id="login-form" class="space-y-6">
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
                                placeholder="admin@example.com"
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
                                    id="login-password" 
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
                        
                        <!-- Submit Button -->
                        <button 
                            type="submit" 
                            class="w-full auth-bg text-white py-3 rounded-lg font-medium hover:opacity-90 transition active:scale-[0.98]"
                        >
                            <i class="fas fa-sign-in-alt mr-2"></i>
                            Sign In
                        </button>
                    </form>
                    
                    

                    <!-- Register Link -->
                    <div class="mt-8 text-center">
                        <p class="text-gray-600">
                            Don't have an account?
                            <RouterLink to="/register"  class="text-blue-600 hover:text-blue-800 font-medium ml-1">
                                Create one
                            </RouterLink>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>