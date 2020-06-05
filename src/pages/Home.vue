<template>
  <div class="home">
    <h1>Trail Advisor</h1>
    <blogs />
  </div>
</template>

<script>
  import Blogs from "@/components/BlogsComponent.vue"
  export default {
    name: "home",
    components: {
      Blogs
    }
  };
</script>