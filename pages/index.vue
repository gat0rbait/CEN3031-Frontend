<template>
<div>
  <h1 class="text-center text-7xl pt-8">Kandu</h1>
  <div>
    {{tasks}}
  </div>
</div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      tasks: -1
    }
  },
  async mounted() {
    this.tasks = await this.$getTasks()
  },
}
</script>
