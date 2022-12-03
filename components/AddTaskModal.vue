<template>
    <div class="modal-overlay">
        <div class="modal">
            <div class="flex flex-col gap-2 justify-start mb-4">
                <div class="flex justify-between items-center content-center">
                    <p class="text-2xl font-bold">Create New Task</p>
                    <button @click="$emit('close-modal')">Close</button>
                </div>
                <form @submit="handleAddTask">
                    <div class="flex flex-col gap-2 mb-4">
                        <p class="text-xl">Name: </p>
                        <input class="bg-gray-100 px-4 py-2 rounded" v-model="taskName" placeholder="Enter task name" required>
                    </div>
 
                    <div class="flex flex-col gap-2 mb-4">
                        <p class="text-xl">Description: </p>
                        <textarea class="bg-gray-100 px-4 py-2 h-24 rounded" v-model="body" placeholder="Enter task description" required></textarea>
                    </div>
                    <div class="flex flex-col gap-2 mb-4">
                        <p class="text-xl">Priority:</p>
                        <select class="bg-gray-100 px-4 py-2 rounded" v-model="priority" required>
                            <option disabled value="">Please select one</option>
                            <option value="LOW">Low</option>
                            <option value="HIGH">High</option>
                        </select>
                    </div>
                    <button class="px-4 py-2 rounded bg-green-300" type="submit">Create Task</button>
                </form>
            </div>

            
        </div>
    </div>
</template>
  
<script>
    export default {
        data() {
            return {
                taskName: '',
                body: '',
                priority: ''
            }
            

        },
        props: {
            status: String
        },
        methods: {
            handleAddTask() {
                this.$createTask(this.taskName, this.body, this.priority, "Kandu", this.$props.status);
                this.$emit('close-modal');
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
        height: max-content;
        width: 500px;
        max-height: 700px;
        margin-top: 10%;
        padding: 40px 20px;
        border-radius: 16px;
    }
</style>