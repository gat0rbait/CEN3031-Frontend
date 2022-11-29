<template>
    <div>

        <div draggable="true" @dragstart="startDrag($event,task)" class="flex w-60 h-full bg-white py-2 px-2 rounded gap-1 flex-col">
            <div class="w-16 h-3 rounded-sm" :class="task.priority == 'LOW' && 'bg-green-400' || task.priority == 'MEDIUM' && 'bg-yellow-400' || task.priority == 'HIGH' && 'bg-red-400'"></div>
            <div class="flex justify-between items-end">
                <h3>{{task.name}}</h3>
                <button @click="showTask = true" class="text-xl">...</button>
            </div>
        </div>
        <ViewTaskModal :task="task" draggable = false v-show="showTask" @close-modal="showTask = false"></ViewTaskModal>
    </div>
</template>
<style>
    
</style>

<script>
    import ViewTaskModal from '~/components/ViewTaskModal.vue';

    export default{
        data() {
            return {
                showTask:false
            }
        },

        props: {
            task: Object
        },
        
        setup() {
            const startDrag = (event, item) => {
                event.dataTransfer.dropEffect = "move";
                event.dataTransfer.effectAllowed = "move";
                event.dataTransfer.setData("itemID", item.id)
            }

            return {
                startDrag
            }

        },
        components: { ViewTaskModal }
    }
</script>