<template>
    <div class="modal-overlay">
        <div class="modal">
            <p>Create new task</p>
            <form @submit.prevent="handleAddResource">
                <input v-model="resourceName" placeholder="Enter resource name" required>
                <input v-model="link" placeholder="Enter resource link" required>
                <button type="submit">Add Resource</button>
            </form>
            <button @click="$emit('close-modal')">Close</button>
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