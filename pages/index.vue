<template>
  <div class="flex">
    <div class="bg-gray-300 w-64 h-screen">
      <h3>Group Name</h3>
      <h4>Members</h4>
      <ul>
        <li>Person 1</li>
        <li>Person 2</li>
        <li>Person 3</li>
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
              name: "test name 2",
              priority: "LOW",
              status: "OPEN"

            }],
            tasks: -1
        };
    },
    async mounted() {
        // this.tasks = await this.$getTasks()
    },


    components: { TaskCard, Swimlane }
}
</script>
