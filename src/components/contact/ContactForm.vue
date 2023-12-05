<template>
    <div class="bg-light flex w-full min-h-screen  justify-center items-center ">
        <div class="bg-primary flex flex-col space-y-6 w-full max-w-4xl p-8 text-center">
            <h1 class="text-3xl font-bold mb-4">Contact Us</h1>
            <!-- Form -->
            <div class="">
                <form class="flex flex-col space-y-4">
                    <div class="mb-4">
                        <label for="name" class="block text-gray-700 text-sm font-bold mb-2">Name</label>
                        <input type="text" id="name" name="name"
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                    </div>

                    <div class="mb-4">
                        <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email</label>
                        <input type="email" id="email" name="email"
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                    </div>

                    <div class="mb-6">
                        <label for="message" class="block text-gray-700 text-sm font-bold mb-2">Message</label>
                        <textarea id="message" name="message" rows="4"
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
                    </div>

                    <div>
                        <button type="submit"
                            class="bg-primary-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
            <!-- MAPA -->
            <div>
                <div class="">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001.063313994167!2d-8.688849824244368!3d41.22039070633754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2468ec3655d101%3A0x12cab54b20119109!2sATEC%20-%20Academia%20de%20Forma%C3%A7%C3%A3o%20(Matosinhos)!5e0!3m2!1sen!2spt!4v1701810264143!5m2!1sen!2spt"
                        width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
        
    };
</script>
  
<style scoped></style>
  