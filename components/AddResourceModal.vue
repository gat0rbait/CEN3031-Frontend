<template>
    <div class="modal-overlay">
        <div class="modal">
            <div class="flex justify-between mb-4">
                <p class="text-xl font-bold">Add New Resource</p>
                <button @click="$emit('close-modal')">Close</button>
            </div>
            <form @submit.prevent="handleAddResource" class="flex flex-col gap-2">
                <p class="text-xl">Name: </p>
                <input class="bg-gray-100 px-4 py-2 rounded mb-2" v-model="resourceName" placeholder="Enter resource name" required>
                <p class="text-xl">URL: </p>
                <input class="bg-gray-100 px-4 py-2 rounded mb-4" v-model="link" placeholder="Enter resource link" required>
                <button class="px-4 py-2 rounded bg-green-300" type="submit">Add Resource</button>
            </form>
        </div>
    </div>
</template>
  
<script>
    export default {
        data() {
            return {
                resourceName: '',
                link: '',
            }
            

        },
        props: {
            status: String
        },
        methods: {
            handleAddResource() {
                this.$emit('add-resource', this.resourceName, this.link);
                this.$emit('close-modal')
            }
        }
            
        
    }
    
</script>

<style>
    .modal-overlay {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        justify-content: center;
        background-color: #000000da;
    }
    .modal {
        background-color: white;
        height: 500px;
        width: 500px;
        margin-top: 10%;
        padding: 40px 20px;
        border-radius: 16px;
    }
</style>