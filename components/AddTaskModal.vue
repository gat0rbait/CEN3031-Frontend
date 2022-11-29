<template>
    <div class="modal-overlay">
        <div class="modal">
            <p>Create new task</p>
            <form @submit="handleAddTask">
                <input v-model="taskName" placeholder="Enter task name" required>
                <input v-model="body" placeholder="Enter task description" required>
                <p>Priority:</p>
                <select v-model="priority" required>
                    <option disabled value="">Please select one</option>
                    <option value="LOW">Low</option>
                    <option value="HIGH">High</option>
                </select>
                <button type="submit">Create Task</button>
            </form>
            <button @click="$emit('close-modal')">Close</button>
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
        height: 500px;
        width: 500px;
        margin-top: 10%;
        padding: 60px 20px;
        border-radius: 20px;
    }
</style>