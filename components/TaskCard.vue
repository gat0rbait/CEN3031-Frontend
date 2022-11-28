<template>
    <div draggable="true" @dragstart="startDrag($event,task)" class="flex w-60 h-full bg-white py-2 px-2 rounded gap-1 flex-col">
        <div class="w-16 h-3 rounded-sm" :class="task.priority == 'LOW' && 'bg-green-400' || task.priority == 'MEDIUM' && 'bg-yellow-400' || task.priority == 'HIGH' && 'bg-red-400'"></div>
        <h3>{{task.name}}</h3>
    </div>
</template>
<style>
    
</style>

<script>
    
    export default{
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

        }
    }
</script>