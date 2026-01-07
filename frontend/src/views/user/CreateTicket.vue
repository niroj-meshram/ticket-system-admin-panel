<script setup>
 import * as yup from 'yup'
 import { ref } from 'vue';
 import { useForm, useField } from 'vee-validate';

 const schema = yup.object({
    title : yup.string().required(),
    slug : yup.string().required(),
    description : yup.string().required(),
    image : yup.mixed().required("Image is required"),
 })

 const {handleSubmit,setFieldValue, setErrors} = useForm({
    validationSchema :schema
 })

 const { value : title, errorMessage : titleError} = useField('title')
 const { value : slug, errorMessage : slugError} = useField('slug')
 const { value : decription, errorMessage : descriptionError} = useField('description')
 const { value : image, errorMessage : imageError} = useField('image')

 const onSubmit = handleSubmit ((values)=>{
    console.log(values)
 })

 const imagePreview = ref('')

 // Handle file selection
const handleImageChange = (e) => {
  const file = e.target.files[0]
  if (file) {
    setFieldValue('image', file)
    
    // Show preview
    const reader = new FileReader()
    reader.onload = (e) => {
      imagePreview.value = e.target.result
    }
    reader.readAsDataURL(file)
  }
}

// Remove image
const removeImage = () => {
  imagePreview.value = ''
  setFieldValue('image', null)
  document.getElementById('imageInput').value = ''
}

</script>
<template>
    <div class="max-w-4xl mx-auto">
        <!-- Header -->
        <div class="mb-8">
            <h1 class="text-3xl font-bold text-gray-800">Create New Content</h1>
            <p class="text-gray-600 mt-2">Fill in the details below to create new content</p>
        </div>

        <!-- Form Container -->
        <div class="bg-white rounded-xl shadow-lg overflow-hidden">
            <form id="contentForm" class="p-6 md:p-8" @submit.prevent="onSubmit">
                <!-- Title Field -->
                <div class="mb-6">
                    <label for="title" class="block text-sm font-medium text-gray-700 mb-2">
                        <span class="flex items-center">
                            <i class="fas fa-heading mr-2 text-blue-500"></i>
                            Title *
                        </span>
                    </label>
                    <input 
                        type="text" 
                        id="title" 
                        name="title"
                        v-model="title"
                        placeholder="Enter a descriptive title"
                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                    >
                    <p class="text-red-500 text-sm">{{ titleError }}</p>

                </div>

                <!-- Slug Field -->
                <div class="mb-6">
                    <label for="slug" class="block text-sm font-medium text-gray-700 mb-2">
                        <span class="flex items-center">
                            <i class="fas fa-link mr-2 text-green-500"></i>
                            URL Slug *
                        </span>
                    </label>
                    <div class="flex">
                        <span class="inline-flex items-center px-4 py-3 rounded-l-lg border border-r-0 border-gray-300 bg-gray-50 text-gray-500">
                            https://example.com/
                        </span>
                        <input 
                            type="text" 
                            id="slug" 
                            name="slug"
                            v-model="slug"
                            placeholder="url-friendly-slug"
                            class="slug-input flex-grow px-4 py-3 border border-gray-300 rounded-r-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-200"
                        >
                    </div>
                    <p class="text-red-500 text-sm">{{ slugError }}</p>

                    
                </div>

                <!-- Description Field -->
                <div class="mb-6">
                    <label for="description" class="block text-sm font-medium text-gray-700 mb-2">
                        <span class="flex items-center">
                            <i class="fas fa-align-left mr-2 text-purple-500"></i>
                            Description *
                        </span>
                    </label>
                    <textarea 
                        id="description" 
                        name="description"
                        rows="5"
                        v-model="decription"
                        placeholder="Provide a detailed description of your content..."
                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition duration-200"
                    ></textarea>
                   
                    <p class="text-red-500 text-sm">{{ descriptionError }}</p>
                </div>

                <!-- Image Upload Field -->
                <div class="mb-8">
                    <input type="file" accept="image/*" id="image" v-model="image" 
                    class="bg-gray-200 w-100 rounded p-2 block"
                    @change="handleImageChange"
                    />
                </div> 
                <div v-if="imagePreview" class="mb-2">
                    <img :src="imagePreview" class="max-h-40 rounded" />
                    <button 
                        type="button" 
                        @click="removeImage"
                        class="text-red-500 text-sm mt-1"
                        >
                    Remove
                    </button>
                </div>

                <!-- Form Actions -->
                <div class="flex flex-col sm:flex-row justify-between items-center pt-6 border-t border-gray-200">
                    <div class="mb-4 sm:mb-0">
                        <p class="text-sm text-gray-600">
                            <i class="fas fa-info-circle mr-1"></i>
                            Fields marked with * are required
                        </p>
                    </div>
                    <div class="flex space-x-4">
                        <button 
                            type="button" 
                            class="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition duration-200"
                        >
                            Cancel
                        </button>
                        <button 
                            type="submit" 
                            class="px-6 py-3 bg-blue-700 text-white font-medium rounded-lg hover:opacity-90 transition duration-200 shadow-md hover:shadow-lg"
                        >
                            <font-awesome-icon icon="ticket" class="mr-2"/>
                            Create Ticket
                        </button>
                    </div>
                </div>
            </form>
        </div>

        <!-- Footer Note -->
        <div class="mt-8 text-center text-gray-500 text-sm">
            <p>Your content will be reviewed before publishing.</p>
        </div>
    </div>
</template>

<style>
        .file-input-hidden {
            position: absolute;
            width: 0.1px;
            height: 0.1px;
            opacity: 0;
            overflow: hidden;
            z-index: -1;
        }
        
        .image-preview {
            transition: all 0.3s ease;
        }
        
        .image-preview:hover {
            transform: scale(1.02);
        }
        
        .slug-input {
            font-family: 'Courier New', monospace;
        }
    </style>