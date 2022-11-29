<template>
<div>
  <div class="flex">
    <div class="bg-gray-300 w-full h-screen px-4 py-8">
      <h3 class="text-xl font-bold mb-8 border-b-2 border-gray-400 pb-8">Team Kandu</h3>
      <h4 class="text-lg font-semibold mb-4">Members</h4>
      <ul class="flex flex-col gap-4 pb-8">
        <li>
          <button class="bg-gray-200 px-4 py-2 rounded-sm w-full">
            <p>Brady</p>
            <p>Email: bradymenswar@ufl.edu</p>
          </button>
        </li>
        <li>
          <button class="bg-gray-200 px-4 py-2 rounded-sm w-full">
            <p>Jared.</p>
            <p>Email: jsanders@ufl.edu</p>
          </button>
        </li>
        <li>
          <button class="bg-gray-200 px-4 py-2 rounded-sm w-full">
            <p>Octavio</p>
            <p>Email: octavio@ufl.edu</p>
          </button>
        </li>
        
      </ul>
      <h4 class="text-lg font-semibold mt-4 mb-4 border-t-2 border-gray-400 pt-8">Resources</h4>
      <ul class="flex flex-col gap-4 pb-8">
        <li v-for="item in resources">{{item.name}}: 
          <a :src="item.url">{{item.url}}</a>
        </li>
          
      </ul>
    </div>
    <Swimlane @refresh-tasks="handleRefresh(openkey)" :key="openkey" class="w-full" name="Backlog" status="OPEN" :tasks="tasks.Items"></Swimlane>
    <Swimlane @refresh-tasks="handleRefresh(inprogkey)" :key="inprogkey" class="w-full" name="In Progress" status="IN_PROGRESS" :tasks="tasks.Items"></Swimlane>
    <Swimlane @refresh-tasks="handleRefresh(completekey)" :key="completekey" class="w-full" name="Done" status="CLOSED" :tasks="tasks.Items"></Swimlane>
    
  </div>
</div>
</template>

<script>

import Swimlane from '~/components/Swimlane.vue';
import TaskCard from '~/components/TaskCard.vue';


export default {
    name: "IndexPage",
    data() {
        return {
            openkey: 0,
            inprogkey: 1000,
            completekey: 5000,
            tasks: -1,
            resources: [
              {
                url: "https://testurl.com",
                name: "Testsite 1"
              },
              {
                url: "https://testurl2.com",
                name: "Testsite 2"
              },
            ]
        };
    },
    methods: {
      async handleRefresh(key){
        this.tasks = await this.$getTasks()
        key++;

      }
    },
    async mounted() {
        this.tasks = await this.$getTasks()
    },


    components: { TaskCard, Swimlane }
}
</script>
