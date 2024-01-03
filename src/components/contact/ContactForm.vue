<template>
    <div class="bg-light flex w-full justify-center items-center ">
        <div class="bg-primary flex flex-col w-full max-w-4xl p-8 text-center">
            <h1 class="text-3xl font-bold mb-4">Contact Us</h1>
            <!-- Form -->
            <div class="">
                <form @submit.prevent class="flex flex-col space-y-4">
                    <div class="mb-4">
                        <label for="name" class="block text-gray-700 text-sm font-bold mb-2">Name</label>
                        <input type="text" v-model="formName" id="name" name="name"
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
                    </div>

                    <div class="mb-4">
                        <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email</label>
                        <input type="email" v-model="formEmail" id="email" name="email"
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
                    </div>

                    <div class="mb-6">
                        <label for="message" class="block text-gray-700 text-sm font-bold mb-2">Message</label>
                        <textarea id="message" v-model="formMessage" name="message" rows="4"
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required></textarea>
                    </div>

                    <div>
                        <button @click="submitForm" type="submit"
                            class="bg-primary-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
            
        </div>
    </div>
</template>
  
<script setup>

import { ref } from 'vue';
import {useToastStore} from "../../store/toast.js";

const toastStore = useToastStore();

const formName = ref(null);
const formEmail = ref(null);
const formMessage = ref(null);



const nameRegex = /^[^\s\d]\D{1,29}$/; //cannot start with digit or white space, no digits allowed and max 30 characters name
const emailRegex = /^\S[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; // cannot start with white space, must have @ and domain
const formMessageRegex = /^\S.[^\r]{1,250}$/; // cannot start with white space or carriage return, no more than 250 characters


const formVerifications = () =>{

  if(!nameRegex.test(formName.value) || !formName.value){
    toastStore.CreateToast("Please enter a valid name", 5);
    return false;
  }

  if(!emailRegex.test(formEmail.value) || !formEmail.value){
    toastStore.CreateToast("Please enter a valid email", 5);
    return false;
  }

  if(!formMessageRegex.test(formMessage.value) || !formMessage.value){
    toastStore.CreateToast("Please enter a valid message", 5);
    return false;
  }

  return true;

}

const submitForm = (e) => {
  e.preventDefault();
  if(formVerifications()){
    toastStore.CreateToast("Form submitted", 10);
    // send form to backend logic here:

    /*
    const formData = {
      name: formName.value,
      email: formEmail.value,
      message: formMessage.value
    }
    */

    // and then reset form
    formName.value = null;
    formEmail.value = null;
    formMessage.value = null;
  }
}


</script>
  
<style scoped></style>
  