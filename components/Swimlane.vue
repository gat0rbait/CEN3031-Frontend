<template>
    <div class="flex flex-col items-center bg-gray-200 w-72 h-screen py-8 px-4" @drop="onDrop($event, status)" @dragenter.prevent, @dragover.prevent>
        <h3 class="self-start">{{name}}</h3>
        <div class="bg-gray-100 mt-4 flex flex-col gap-4 px-4 py-4 rounded-lg">
            <div v-for="task in getList(status)" :key="task.id">
                <TaskCard :task="task"></TaskCard>
            </div>
            <button class="bg-white px-2 py-2 rounded w-60" @click="showModal = true">Add Task</button>
        </div>
    </div>
</template>

<script>
import { setgroups } from 'process';
import TaskCard from './TaskCard.vue';


export default {
    props: {
        name: String,
        status: String,
        tasks: []
    },
    setup(props) {
        const onDrop = (event, list) => {
            const itemID = event.dataTransfer.getData("itemID");
            const item = props.tasks.find((item) => item.id == itemID);
            //UpdateTask() to change status
            item.status = list;
        };
        const getList = (list) => {
            return props.tasks.filter((item) => item.status == list);
        }
        const onAdd = (add) => {
            
        }

        return {
            getList,
            onDrop,
            onAdd
        }
    },
    components: { TaskCard }
}
</script>