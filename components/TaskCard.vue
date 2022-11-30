<template>
    <div>

        <div draggable="true" @dragstart="startDrag($event,task)" class="flex w-60 h-full bg-white p-2 rounded justify-between items-center">
            <div class="flex gap-2">
                <div class="w-2 flex-none rounded-sm h-max" :class="task.priority == 'LOW' && 'bg-green-400' || task.priority == 'MEDIUM' && 'bg-yellow-400' || task.priority == 'HIGH' && 'bg-red-400'"></div>
                <h3>{{task.name}}</h3>
            </div>
            <div class="h-full">
                <button @click="showTask = true" class="flex gap-1 p-2">
                    <div class="w-1 h-1 bg-blue-500 rounded"></div>
                    <div class="w-1 h-1 bg-blue-500 rounded"></div>
                    <div class="w-1 h-1 bg-blue-500 rounded"></div>
                    
                </button>
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