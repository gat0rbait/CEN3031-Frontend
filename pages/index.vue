<template>
  <div class="flex">
    <div class="bg-gray-300 w-64 h-screen px-4 py-8">
      <h3 class="text-xl font-bold mb-8 border-b-2 border-gray-400 pb-8">Team Kandu</h3>
      <h4 class="text-lg font-semibold mb-4">Members</h4>
      <ul class="flex flex-col gap-4">
        <li>
          <button class="bg-gray-200 px-4 py-2 rounded-sm w-full">Brady M.</button>
        </li>
        <li>
          <button class="bg-gray-200 px-4 py-2 rounded-sm w-full">Octavio B.</button>
        </li>
        <li>
          <button class="bg-gray-200 px-4 py-2 rounded-sm w-full">Jared S.</button>
        </li>
        
      </ul>
    </div>
    <Swimlane name="Backlog" status="OPEN" :tasks="testTasks"></Swimlane>
    <Swimlane name="In Progress" status="IN_PROGRESS" :tasks="testTasks"></Swimlane>
    <Swimlane name="Done" status="DONE" :tasks="testTasks"></Swimlane>
    
  </div>
</template>

<script>

import Swimlane from '~/components/Swimlane.vue';
import TaskCard from '~/components/TaskCard.vue';


export default {
    name: "IndexPage",
    data() {
        return {
            testTasks: [{
              id: 1,
              name: "test name",
              priority: "HIGH",
              status: "OPEN"

            },
            {
              id: 2,
              name: "This is a much longer name to test how this will overflow and I think it works",
              priority: "LOW",
              status: "OPEN"

            }],
            tasks: -1,
            showTask: false
        };
    },
    async mounted() {
        // this.tasks = await this.$getTasks()
    },


    components: { TaskCard, Swimlane }
}
</script>
