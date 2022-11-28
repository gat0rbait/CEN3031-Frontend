<template>
    <div class="bg-gray-200 w-72 h-screen py-8 px-4" @drop="onDrop($event, status)" @dragenter.prevent, @dragover.prevent>
        <h3 class="mb-4">{{name}}</h3>
        <div class="flex flex-col gap-4">
            <div v-for="task in getList(status)" :key="task.id">
                <TaskCard :task="task"></TaskCard>
            </div>
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

        return {
            getList,
            onDrop
        }
    },
    components: { TaskCard }
}
</script>