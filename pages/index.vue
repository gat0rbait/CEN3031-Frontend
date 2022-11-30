<template>
<div class="flex flex-col h-screen">
  <div class="bg-blue-900 h-16">
    <img class="h-full p-4" src="../static/KanduLogo.png" alt="Kandu">
  </div>
  <div class="flex h-full">
    
    <div class="bg-blue-300 w-full h-full px-4 py-8 max-w-sm">
      <h3 class="text-xl font-bold mb-8 border-b-2 border-blue-400 pb-8 text-blue-900">Team Kandu</h3>
      <h4 class="text-lg font-semibold mb-4 text-blue-900">Members</h4>
      <ul class="flex flex-col gap-4 pb-8">
        <li v-for="item in members">
          <button class="bg-white px-4 py-2 rounded-sm w-full" >
            <p class="text-blue-900 text-xl">{{item.name}}</p>
            <p>{{item.email}}</p>
          </button>
        </li>
      </ul>
      <h4 class="text-lg font-semibold mt-4 mb-4 border-t-2 border-blue-400 pt-8 text-blue-900">Resources</h4>
      <ul class="flex flex-col h-max gap-4 overflow-y-scroll scroll-hide max-h-60">
        <li class="flex flex-col justify-between text-blue-900 text-lg font-bold bg-white px-4 py-2 rounded" v-for="item in resources">
          <div class="flex justify-between">
            <p>{{item.name}}</p>
            <button @click="removeResource(item.name)">⨯</button>
          </div>
          <a class="text-blue-900 text-lg font-semibold" :src="item.url">{{item.url}}</a>
          
        </li>
        
      </ul>
      <button class="mt-4 px-4 py-2 text-xl bg-white text-blue-900 rounded w-full" @add-resource="handleAddResource" @click="showResourceModal=true">Add Resource</button>
      <AddResourceModal v-show="showResourceModal" @close-modal="showResourceModal = false"></AddResourceModal>
    </div>
    <div class="pattern flex w-full">
      <Swimlane @refresh-tasks="handleRefresh(openkey)" :comments="comments" :key="openkey" class="w-full" name="Backlog" status="OPEN" :tasks="tasks.Items"></Swimlane>
      <Swimlane @refresh-tasks="handleRefresh(inprogkey)" :comments="comments" :key="inprogkey" class="w-full" name="In Progress" status="IN_PROGRESS" :tasks="tasks.Items"></Swimlane>
      <Swimlane @refresh-tasks="handleRefresh(completekey)" :comments="comments" :key="completekey" class="w-full" name="Done" status="CLOSED" :tasks="tasks.Items"></Swimlane>
    </div>
    
  </div>
</div>
</template>

<style>
  .pattern {
    background-image: url("../static/PATTERN.png");
    background-repeat: repeat;
  }

  .scroll-hide::-webkit-scrollbar {
    display: none;
  }
</style>
<script>

import Swimlane from '~/components/Swimlane.vue';
import TaskCard from '~/components/TaskCard.vue';


export default {
    name: "IndexPage",
    data() {
        return {
            showResourceModal: false,
            openkey: 0,
            inprogkey: 1000,
            completekey: 5000,
            tasks: -1,
            comments: -1,
            resources: [
              {
                url: "https://testurl2.com",
                name: "Testsite 1"
              },
              {
                url: "https://testurl2.com",
                name: "Testsite 2"
              },
              
            ],
            members: [
              {
                name: "Brady",
                email: "brady@ufl.edu"
              },
              {
                name: "Jared",
                email: "jared@ufl.edu"
              },
              {
                name: "Octavio",
                email: "octavio@ufl.edu"
              }
            ]
        };
    },
    methods: {
      async handleRefresh(key){
        this.tasks = await this.$getTasks()
        key++;

      },
      handleAddResource(name, link) {
        let newRes = {
          url: link,
          name: name
        }
        this.resources.push(newRes);
        console.log(this.resources)
      },
      removeResource(name) {
        this.resources = this.resources.filter((item) => {return item.name != name})
      }
    },
    async mounted() {
        this.tasks = await this.$getTasks()
        this.comments = await this.$getComments()
    },


    components: { TaskCard, Swimlane }
}
</script>
