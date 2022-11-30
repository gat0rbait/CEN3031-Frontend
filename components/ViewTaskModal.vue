<template>
    <div class="modal-overlay">
        <div class="modal">
            <div class="flex flex-col gap-2 justify-start mb-4">
                <div class="flex justify-between">
                    <p class="text-2xl font-bold">{{task.name}}</p>
                    <button @click="$emit('close-modal')">Close</button>
                </div>
                <div class="flex items-center gap-2">
                    <div class="w-4 h-4 rounded" :class="task.priority == 'LOW' && 'bg-green-400' || task.priority == 'MEDIUM' && 'bg-yellow-400' || task.priority == 'HIGH' && 'bg-red-400'"></div> 
                    <p class="text-lg">{{(task.priority.charAt(0) + task.priority.slice(1).toLowerCase())}} Priority</p>
                </div>
                <p class="text-md">{{task.reporter}}</p>
            </div>
            <h4 class="text-xl font-semibold mb-2">Description:</h4>
            <div class="bg-gray-100 rounded px-4 py-2 w-min-max">
                <p class="text-lg">{{task.body}}</p>
            </div>
            
            <p class="mt-4 text-xl font-semibold mb-2">Comments: </p>
            <div class="max-h-48 overflow-y-scroll flex flex-col gap-2 bg-gray-100 rounded px-4 py-4 w-min-max">
                <div class="bg-gray-200 rounded-sm px-4 py-2">
                    <p>Person: This rocks! 10/24/22</p>
                </div>
                
            </div>
            <div class="flex gap-4 mt-2">
                <input class="bg-gray-100 w-full h-12 px-4 py-2 rounded" type="text" placeholder="Add Comment">
                <button class="bg-green-300 h-12 rounded-lg flex justify-center items-center p-2">
                    <p class="px-4 py-2 text-xl">Post</p>
                </button>
            </div>
            <button @click="deleteTask" class="mt-4 px-4 py-2 rounded bg-red-300">Delete Task</button>
            
        </div>
    </div>
</template>
  
<script>

    export default {
        props: {
            task: Object
        },
        methods: {
            deleteTask() {
                console.log("Delete")
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
        width: 500px;
        height: max-content;
        max-height: 700px;
        margin-top: 10%;
        padding: 40px 20px;
        border-radius: 16px;
    }
</style>