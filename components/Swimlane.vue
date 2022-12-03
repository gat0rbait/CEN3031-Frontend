<template>
    <div v-if="renderComponent" class="flex flex-col items-center w-72 h-full py-8 px-4" @drop="onDrop($event, status)" @dragenter.prevent, @dragover.prevent>
        <h3 class="text-xl font-bold text-blue-900">{{name}}</h3>
        <div class="bg-blue-300 mt-4 flex flex-col gap-4 px-4 py-4 rounded-lg">
            <div v-for="task in getList(status)" :key="task.id">
                <TaskCard :comments="comments" :task="task"></TaskCard>
            </div>
            <button class="bg-white px-2 py-2 rounded w-60" @click="showAdd = true">Add Task</button>
            <AddTaskModal :status="status" draggable = false v-show="showAdd" @close-modal="showAdd = false"></AddTaskModal>
        </div>
    </div>
</template>

<script>
import TaskCard from './TaskCard.vue';
import AddTaskModal from './AddTaskModal.vue'


export default {
    data() {
        return {
            renderComponent: true,
            showAdd: false
        }
    },
    props: {
        name: String,
        status: String,
        tasks: [],
        comments: []
    },
    methods: {
    
        async onDrop(event, list) {
            const itemID = event.dataTransfer.getData("itemID");
            const item = this.$props.tasks.find((item) => item.id == itemID);
            //UpdateTask() to change status
            await this.$changeTaskStatus(item.id, list);
            this.$emit("refresh-tasks")
        },
        getList(list){
            return this.$props.tasks?.filter((item) => item.status == list);
        }
    },
    
    components: { TaskCard, AddTaskModal }
}
</script>