<template>
    <div class="modal-overlay">
        <div class="modal">
            <p>{{task.name}}</p>
            <button @click="$emit('close-modal')">Close</button>
        </div>
    </div>
</template>
  
<script>
    export default {
        props: {
            task: Object
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